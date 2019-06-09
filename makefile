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

pretty:
	yarn pretty

checkin: pretty
	git commit -am "checkin" && git push
