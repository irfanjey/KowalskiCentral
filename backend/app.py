from flask import Flask, request, jsonify
import requests
from flask_pymongo import PyMongo
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = 'BBD66BCC8395450DACBAD9ABB7B0034A'

def extract_asin(url):
    pattern = r'/dp/([A-Z0-9]{10})'
    match = re.search(pattern, url)
    if match:
        return match.group(1)
    return None

def get_product_info(asin):
    params = {
        'api_key': API_KEY,
        'amazon_domain': 'amazon.ca',
        'asin': asin,
        'type': 'product'
    }
    response = requests.get('https://api.rainforestapi.com/request', params=params)
    return response.json()

@app.route("/")
def home():
    return "Hello World"


@app.route("/findproductdeets", methods=['POST'])
def productinfo():
    data = request.get_json()
    print("Received data:", data)  # Log incoming data
    product_url = data.get('url')
    if not product_url:
        return jsonify({"error": "No URL provided"}), 400

    asin = extract_asin(product_url)
    if not asin:
        return jsonify({"error": "ASIN not found in URL"}), 400

    product_info = get_product_info(asin)
    return jsonify(product_info)

if __name__ == "__main__":
    app.run(debug=True)