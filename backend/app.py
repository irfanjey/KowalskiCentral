from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>Hello world</p>"

@app.route("/login")
def login():
    return "<p>Haha lol</p>"

if __name__ == '__main__':
    app.run(debug=True)