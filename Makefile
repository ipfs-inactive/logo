
local="http://localhost:8080/ipfs/"
gway="http://gateway.ipfs.io/ipfs/"

.PHONY: publish clean generate

index.html: index.md
	marked <$< >$@

generate: clean
	npm install
	node generate.js

publish: index.html
	@mv -f node_modules .node_modules &>/dev/null || true
	@export hash=`ipfs add -r -q . | tail -n1`; \
		echo $$hash >published-version; \
		echo $(local)$$hash; \
		echo $(gway)$$hash;
	@mv -f .node_modules node_modules &>/dev/null  || true

clean:
	rm raster-generated/*
