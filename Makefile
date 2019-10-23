install:
	npm install

start:
	npx babel-node src/index.js

build:
	rm -rf dist
	npm run build

publish:
	npm publish

lint:
	npx eslint .

run:
	node dist/index.js
