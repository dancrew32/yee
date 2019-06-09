
make:
	vim ./makefile

edit:
	vim ./index.tsx

get_yarn:
	./get_yarn.sh

deps:
	rm -rf node_modules
	yarn add prettier --dev --exact
	yarn add react
	yarn add react-dom
	yarn add @material-ui/core
	yarn add hookrouter
	yarn add @types/hookrouter
	yarn add --dev typescript
	yarn add --dev parcel-bundler

run:
	yarn start

pretty:
	yarn pretty

checkin:
	git commit -am "checkin" && git push
