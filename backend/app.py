from flask import Flask, request, jsonify
import requests
import re
from flask_cors import CORS
from openai import OpenAI
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = 'BBD66BCC8395450DACBAD9ABB7B0034A'
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

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

def query_openai(prompt):
    openai = OpenAI()
    response = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{
        "role":"user", "content":prompt
    }]
)
    return response.choices[0].message.content

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
    
    # Query OpenAI with product info
    prompt = f"based on this json data suggest if should buy this product based on it's environmental impact and give me a definitive answer based on the ingredients, and general manufacturing processes of the product. After that, format the answer in a short format that states yes or no in the start and then give me short bullet points of why or why not to buy the specific product. If no, then elaborate on eco friendly alternatives that do least collective harm to the environment taking into account all relevant factors and some common sense: {product_info}"
    openai_response = query_openai(prompt)

    return jsonify({
        "product_info": product_info,
        "openai_response": openai_response
    })

if __name__ == "__main__":
    app.run(debug=True)
