
make:
	vim ./makefile

edit:
	vim ./src/index.tsx

get_yarn:
	./get_yarn.sh

deps:
	rm -rf node_modules
	yarn add prettier --dev --exact
	yarn add react
	yarn add react-dom
	yarn add hookrouter
	yarn add @types/hookrouter
	yarn add --dev typescript
	yarn add --dev parcel-bundler

watch:
	yarn watch

build:
	yarn build

pretty:
	yarn pretty

checkin: pretty
	git commit -am "checkin" && git push
