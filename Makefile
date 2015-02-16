
local="http://localhost:8080/ipfs/"
gway="http://gateway.ipfs.io/ipfs/"

index.html: index.md
	marked <$< >$@

publish: index.html
	mv .git /tmp/publishing
	@export hash=`ipfs add -r -q . | tail -n1`; \
		echo $$hash >published-version; \
		echo $(local)$$hash; \
		echo $(gway)$$hash; \
	@mv /tmp/publishing .git

# we really need an ignore flag in ipfs add...