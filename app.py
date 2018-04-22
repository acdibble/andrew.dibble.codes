from flask import Flask
from flask import render_template

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")

@app.route('/')
def home():
    return render_template('index.html')

app.run(port=3000)
