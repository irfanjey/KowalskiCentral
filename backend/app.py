from flask import Flask, render_template
import requests
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"]  = "mongodb+srv://g:g@terrahacks.sv2utes.mongodb.net/?retryWrites=true&w=majority&appName=Terrahacks"
mongo = PyMongo(app)

@app.route("/")
def home():
    online_users = mongo.db.users.find({"online": True})
    return online_users

@app.route("/login")
def login():
    return "<p>Haha lol</p>"

if __name__ == '__main__':
    app.run(debug=True)