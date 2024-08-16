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

# Debug: Print MongoDB URI
print(f"MongoDB URI: {app.config['MONGO_URI']}")

mongo = PyMongo(app)

# Test MongoDB connection
@app.route('/test-db', methods=['GET'])
def test_db_connection():
    try:
        test_collection = mongo.db.test
        test_document = test_collection.find_one()
        if test_document:
            return jsonify({"message": "MongoDB connection successful", "data": test_document}), 200
        else:
            return jsonify({"message": "MongoDB connection successful but no test document found"}), 200
    except Exception as e:
        return jsonify({"error": "Failed to connect to MongoDB", "details": str(e)}), 500

# API endpoint to fetch all events
@app.route('/api/events', methods=['GET'])
def get_events():
    try:
        # Check if mongo object is properly initialized
        if mongo is None or mongo.db is None:
            return jsonify({"error": "MongoDB client is not initialized"}), 500

        events_collection = mongo.db.events
        events = events_collection.find()
        event_list = []
        for event in events:
            event_data = {
                'id': str(event['_id']),  # Convert ObjectId to string
                'title': event.get('title'),
                'description': event.get('description'),
                'start_date': str(event.get('start_date')),  # Ensure date is in string format
                'start_time': str(event.get('start_time')),
                'end_date': str(event.get('end_date')),
                'end_time': str(event.get('end_time')),
                'location': event.get('location'),
                'created_by': event.get('created_by')
            }
            event_list.append(event_data)
        return jsonify(event_list)
    except Exception as e:
        return jsonify({"error": "An error occurred while fetching events", "details": str(e)}), 500

# Serve the React frontend
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
