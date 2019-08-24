make:
	vim ./makefile

edit:
	vim ./src/index.tsx

get_yarn:
	./get_yarn.sh

venv:
	virtualenv -p python3 venv

deps: venv
	rm -rf node_modules
	yarn install
	./venv/bin/pip3 install -r requirements.txt

clean:
	rm -rf venv

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

debug:
	FLASK_ENV=development FLASK_APP=api.py ./venv/bin/flask run # --host=0.0.0.0 --port=5000
