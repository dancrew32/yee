make:
	vim ./makefile

edit:
	vim ./src/index.tsx

get_yarn:
	./get_yarn.sh

deps:
	rm -rf node_modules
	yarn install

watch:
	yarn watch

build:
	yarn build

test:
	yarn test

pretty:
	yarn pretty

checkin: pretty test
	git add -A && git commit && git push

upgrade:
	yarn upgrade

