
local="http://localhost:8080/ipfs/"
gway="http://gateway.ipfs.io/ipfs/"

.PHONY: publish clean

index.html: index.md
	marked <$< >$@

publish: index.html
	@export hash=`ipfs add -r -q . | tail -n1`; \
		echo $$hash >published-version; \
		echo $(local)$$hash; \
		echo $(gway)$$hash;

clean:
	@rm raster-generated/*
