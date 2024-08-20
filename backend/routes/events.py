from flask import Blueprint, request, jsonify
from backend.app import mongo
from bson.objectid import ObjectId
import datetime


events = Blueprint('events', __name__)

@events.route('/events', methods=['GET'])
def get_events():
    try:
        events_collection = mongo.db.events
        events_list = []
        for event in events_collection.find():
            event_data = {
                'id': str(event['_id']),
                'title': event.get('title'),
                'description': event.get('description'),
                'start_date': str(event.get('start_date')),
                'start_time': str(event.get('start_time')),
                'end_date': str(event.get('end_date')),
                'end_time': str(event.get('end_time')),
                'location': event.get('location'),
                'created_by': event.get('created_by')
            }
            events_list.append(event_data)
        return jsonify(events_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching events', 'details': str(e)}), 500

@events.route('/events/<id>', methods=['GET'])
def get_event(id):
    try:
        event = mongo.db.events.find_one({'_id': ObjectId(id)})
        if event:
            event_data = {
                'id': str(event['_id']),
                'title': event.get('title'),
                'description': event.get('description'),
                'start_date': str(event.get('start_date')),
                'start_time': str(event.get('start_time')),
                'end_date': str(event.get('end_date')),
                'end_time': str(event.get('end_time')),
                'location': event.get('location'),
                'created_by': event.get('created_by')
            }
            return jsonify(event_data)
        else:
            return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching the event', 'details': str(e)}), 500

@events.route('/events', methods=['POST'])
def create_event():
    try:
        data = request.json
        result = mongo.db.events.insert_one(data)
        return jsonify({'id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred while creating the event', 'details': str(e)}), 500

@events.route('/events/<id>', methods=['PUT'])
def update_event(id):
    try:
        data = request.json
        result = mongo.db.events.update_one({'_id': ObjectId(id)}, {'$set': data})
        if result.matched_count:
            return jsonify({'message': 'Event updated successfully'}), 200
        else:
            return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while updating the event', 'details': str(e)}), 500

@events.route('/events/<id>', methods=['DELETE'])
def delete_event(id):
    try:
        result = mongo.db.events.delete_one({'_id': ObjectId(id)})
        if result.deleted_count:
            return jsonify({'message': 'Event deleted successfully'}), 200
        else:
            return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while deleting the event', 'details': str(e)}), 500

@events.route('/events/upcoming/count', methods=['GET'])
def get_upcoming_events_count():
    try:
        events_collection = mongo.db.events
        now = datetime.datetime.utcnow()
        count = events_collection.count_documents({
            'start_date': {'$gte': now}
        })
        return jsonify({'count': count})
    except Exception as e:
        return jsonify({'error': 'An error occurred while counting upcoming events', 'details': str(e)}), 500
