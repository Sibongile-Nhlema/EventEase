from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)

# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Define the Event model
class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    end_time = db.Column(db.Time, nullable=False)
    location = db.Column(db.String(255), nullable=True)
    created_by = db.Column(db.Integer, nullable=True)

# API endpoint to fetch all events
@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    event_list = []
    for event in events:
        event_data = {
            'id': event.id,
            'title': event.title,
            'description': event.description,
            'start_date': str(event.start_date),
            'start_time': str(event.start_time),
            'end_date': str(event.end_date),
            'end_time': str(event.end_time),
            'location': event.location,
            'created_by': event.created_by
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
