from flask import Flask, render_template, request, jsonify
import requests
from flask_pymongo import PyMongo
import re

app = Flask(__name__)
app.config["MONGO_URI"]  = "mongodb+srv://g:g@terrahacks.sv2utes.mongodb.net/?retryWrites=true&w=majority&appName=Terrahacks"
mongo = PyMongo(app)


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
    response = requests.get('https://api.rainforestapi.com/request', params)
    return response.json()

@app.route("/")
def home():
    return "Hello World"


@app.route("/findproductdeets", methods=['GET'])
def productinfo():
    # Get the URL from the query parameters
    product_url = 'https://www.amazon.ca/Luminous-Loose-Banana-Setting-Powder/dp/B07CH87YRW/ref=sr_1_1_sspa?crid=25O9CN4TBJC44&dib=eyJ2IjoiMSJ9.cBKxaKbiFLR59haI7gANvNUpQ6Tv-PndXqoLjuiq184jQ411rU79mbMvv448nGIy-OTQt-UIMqMy2YLT1KUfTjo1a9tkGN1klyzCls9IUAZqrVbbPKd_miNq8PIk-wpu7WDC7NhWsifkco8vcqnVK-TPUM9f5VJsIYKQXmlz2eChrRJdW4AthKhYN143FkUpCDorh8P9i-BTi3l8WAgICmH2kAjS7Ruyj3vqEKqwNjOIiuFgnRyul_jqOIwwUwfCK86Mt1k_xWt4k7Mkr3lF6syllk35DUWNDcs2ROidIYk.tEXGlFYs2PzbAr2wHEIkahNHAqg13XZsDlpwj98xAOs&dib_tag=se&keywords=makeup&qid=1722707270&sprefix=makeup%2Caps%2C136&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
    if not product_url:
        return jsonify({"error": "No URL provided"}), 400

    # Extract the ASIN from the URL
    asin = extract_asin(product_url)
    if not asin:
        return jsonify({"error": "ASIN not found in URL"}), 400

    # Get product information from Rainforest API
    product_info = get_product_info(asin)
    
    # Return the product information as JSON
    return jsonify(product_info)

if __name__ == "__main__":
    app.run(debug=True)
