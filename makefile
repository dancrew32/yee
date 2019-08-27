make:
	vim ./makefile

edit:
	vim ./src/index.tsx

get_yarn:
	./get_yarn.sh

venv: clean
	virtualenv -p python3 venv

clean:
	rm -rf venv
	rm -rf node_modules

deps:
	yarn install
	./venv/bin/pip3 install -r requirements.txt

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

lab:
	./venv/bin/jupyter lab
