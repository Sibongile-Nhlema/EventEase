from flask import jsonify
from app import mongo

def get_events():
    try:
        events_collection = mongo.db.events
        events = events_collection.find()
        event_list = []
        for event in events:
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
            event_list.append(event_data)
        return jsonify(event_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching events', 'details': str(e)}), 500
