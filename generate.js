'use strict'
let P = require('bluebird')
let glob = P.promisify(require('glob'))
let svg2png = require('svg2png')
let fs = P.promisifyAll(require('fs'))

let targets = [128, 256, 512, 1024]

let resolutions = {
  logo: {height: 512, width: 512},
  text: {height: 512, width: 1280 - 512},
  joined: {height: 512, width: 1280}
}

for (let key of Object.keys(resolutions)) {
  var obj = resolutions[key]
  obj.ratio = obj.width / obj.height
}
// logo, text(, postfix)
let mixes = [
  // logos only
  ['black'], ['ice'], ['ice-text'], ['white'], ['white-outline'],
  // joined
  ['black', 'black'], ['ice', 'black'], ['ice', 'white', 'white'],
  ['white', 'white'], ['white-outline', 'white'],
  // text only
  [null, 'white'], [null, 'black']
]

glob('vector/*-vector-*.svg')
  .map(name => {
    return fs.readFileAsync(name).then(buff => {
      return {name: name, content: buff}
    })
  })
  .then(files => {
    files.forEach(file => {
      file.type = file.name.match(/-vector-(.+).svg/)[1]
    })
    let logos = {}
    files.filter(file => file.name.match(/ipfs-logo/)).forEach(logo => {
      logos[logo.type] = logo
    })
    let texts = {}
    files.filter(file => file.name.match(/ipfs-text/)).forEach(text => {
      texts[text.type] = text
    })
    return P.map(targets, target => P.map(mixes, mix => {
      let name = 'ipfs-'
      let logo = mix[0]
      let text = mix[1]
      let postfix = mix[2] ? '-' + mix[2] : ''

      let type = 'logo'
      if (!logo) {
        type = 'text'
      } else if (text) {
        type = 'joined'
      }
      name += {text: 'text', joined: 'logo-text', logo: 'logo'}[type] + '-'

      name += target + '-'
      name += (logo || text)
      name += postfix
      name += '.png'
      let height = target
      let width = resolutions[type].ratio * height
      let content = (type === 'logo' ? logos[logo] : texts[text]).content
      let png
      if (type !== 'joined') {
        png = svg2png(content, {width: width, height: height})
      } else {
        let res = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="512" width="1280" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 1280 512">'
        res += logos[logo].content.toString().replace(/<\?xml(.*?)>/, '').replace(/<svg(.*?)>/, '').replace(/<\/svg(.*?)>/, '')
        res += '<g transform="translate(512 0)">'
        res += texts[text].content.toString().replace(/<\?xml(.*?)>/, '').replace(/<svg(.*?)>/, '').replace(/<\/svg(.*?)>/, '')
        res += '</g>'
        res += '</svg>'
        png = svg2png(new Buffer(res), {width: width, height: height})
      }
      return png.then(buff => {
        fs.writeFileAsync('raster-generated/' + name, buff)
      })
    })
    )
  }).all()
