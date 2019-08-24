import json
import requests
from flask import Flask, Response

app = Flask(__name__)

USER_AGENT = 'Mozilla/5.0 (Wat x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
CONTENT_TYPE = 'application/json; charset=utf-8'


def fetch(url):
    headers = {'User-Agent': USER_AGENT}
    return requests.get(url, headers=headers)


def to_json(payload):
    json_response = json.dumps(payload)
    response_len = len(json_response)
    response = Response(json_response, content_type=CONTENT_TYPE)
    response.headers.add('Content-length', response_len)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.status_code = 200
    return response


@app.route('/api/', methods=['GET'])
def api_request():
    # content = fetch('https://danmasq.com').content.decode('utf-8')
    content = fetch('https://reddit.com/r/aww.json').json()
    payload = {'content': content}
    return to_json(payload)
