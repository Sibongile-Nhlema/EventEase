from flask import Flask, jsonify, send_from_directory
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

# Define the Event model
# In MongoDB, models are not strictly defined like in SQLAlchemy,
# so you'll handle documents directly.

# API endpoint to fetch all events
@app.route('/api/events', methods=['GET'])
def get_events():
    events_collection = mongo.db.events
    events = events_collection.find()
    event_list = []
    for event in events:
        event_data = {
            'id': str(event['_id']),  # Convert ObjectId to string
            'title': event.get('title'),
            'description': event.get('description'),
            'start_date': str(event.get('start_date')),
            'start_time': str(event.get('start_time')),
            'end_date': str(event.get('end_date')),
            'end_time': str(event.get('end_time')),
            'location': event.get('location'),
            'created_by': event.get('created_by')
        }
        event_list.append(event_data)
    return jsonify(event_list)

# Serve the React frontend
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
