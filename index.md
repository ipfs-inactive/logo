<style>
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
joined {
	white-space: nowrap;
}
</style>

<script>
document.onreadystatechange = function () {
  // Solorized backround colors
  var palette = ['white', 'black', '#002B36', '#FDF6E3']
  var color = palette[0]
  var body = document.getElementsByTagName('body')[0]
  body.style.backgroundColor = color
  body.onclick= function(){
    color = palette[(palette.indexOf(color) + 1) % palette.length] || 'white'
    body.style.backgroundColor = color
  }
}
</script>


# IPFS Logo

click to toggle background color

## cube + text

### vector
![](vector/ipfs-logo-vector-ice-text.svg)
<joined>
![](vector/ipfs-logo-vector-black.svg)
![](vector/ipfs-text-vector-black.svg)
</joined>
<joined>
![](vector/ipfs-logo-vector-white.svg)
![](vector/ipfs-text-vector-white.svg)
</joined>
<joined>
![](vector/ipfs-logo-vector-ice.svg)
![](vector/ipfs-text-vector-black.svg)
</joined>
<joined>
![](vector/ipfs-logo-vector-ice.svg)
![](vector/ipfs-text-vector-white.svg)
</joined>

### 128

![](raster-generated/ipfs-logo-text-128-black.png)
![](raster-generated/ipfs-logo-text-128-white.png)
![](raster-generated/ipfs-logo-text-128-ice.png)
![](raster-generated/ipfs-logo-text-128-ice-white.png)

### 256

![](raster-generated/ipfs-logo-text-256-black.png)
![](raster-generated/ipfs-logo-text-256-white.png)
![](raster-generated/ipfs-logo-text-256-ice.png)
![](raster-generated/ipfs-logo-text-256-ice-white.png)

### 512

![](raster-generated/ipfs-logo-text-512-black.png)
![](raster-generated/ipfs-logo-text-512-white.png)
![](raster-generated/ipfs-logo-text-512-ice.png)
![](raster-generated/ipfs-logo-text-512-ice-white.png)

### 1024

![](raster-generated/ipfs-logo-text-1024-black.png)
![](raster-generated/ipfs-logo-text-1024-white.png)
![](raster-generated/ipfs-logo-text-1024-ice.png)
![](raster-generated/ipfs-logo-text-1024-ice-white.png)

## cube only

### vector

![](vector/ipfs-logo-vector-black.svg)
![](vector/ipfs-logo-vector-white.svg)
![](vector/ipfs-logo-vector-ice.svg)
![](vector/ipfs-logo-vector-white-outline.svg)

### 128

![](raster-generated/ipfs-logo-128-black.png)
![](raster-generated/ipfs-logo-128-white.png)
![](raster-generated/ipfs-logo-128-ice.png)

### 256

![](raster-generated/ipfs-logo-256-black.png)
![](raster-generated/ipfs-logo-256-white.png)
![](raster-generated/ipfs-logo-256-ice.png)

### 512

![](raster-generated/ipfs-logo-512-black.png)
![](raster-generated/ipfs-logo-512-white.png)
![](raster-generated/ipfs-logo-512-ice.png)

### 1024

![](raster-generated/ipfs-logo-1024-black.png)
![](raster-generated/ipfs-logo-1024-white.png)
![](raster-generated/ipfs-logo-1024-ice.png)

## tessellated

![](raster/ipfs-logo-128-black-tessellated.png)
![](raster/ipfs-logo-128-white-tessellated.png)
![](raster/ipfs-logo-128-ice-tessellated.png)

