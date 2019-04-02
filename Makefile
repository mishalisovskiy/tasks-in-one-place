install:
	npm install

start:
	npx babel-node -- src/bin/tasks.js
	
publish:
	npm publish

lint:
	npx eslint .

remote:
	git push origin master
