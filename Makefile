install:
	npm install

start:
	npx babel-node src/index.js

build:
	make install
	rm -rf dist
	npm run build

publish:
	npm publish

lint:
	npx eslint .

run:
	node dist/index.js

dev:
	make lint
	make build
	make run

init:
	make install
	make dev
