from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return '<h1>Hi there</h1> <span>go to <a href="https://github.com/Gotek12/Obiektowe">Github</a></span>'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
