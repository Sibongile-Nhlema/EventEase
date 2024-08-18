from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)

# Configure MongoDB connection
app.config['MONGO_URI'] = os.getenv('DATABASE_URL')
mongo = PyMongo(app)

# Import routes after initializing the app
from backend.routes import events

# Register routes
app.register_blueprint(events)

# Serve the React frontend
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
