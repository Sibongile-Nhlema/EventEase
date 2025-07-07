from flask import jsonify, send_from_directory, request, current_app
from .backend.models import Event
from .backend import db

@current_app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    event_list = [{
        'id': event.id,
        'title': event.title,
        'description': event.description,
        'start_date': str(event.start_date),
        'start_time': str(event.start_time),
        'end_date': str(event.end_date),
        'end_time': str(event.end_time),
        'location': event.location,
        'created_by': event.created_by
    } for event in events]
    return jsonify(event_list)

@current_app.route('/')
def serve():
    return send_from_directory(current_app.static_folder, 'index.html')

@current_app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(current_app.static_folder, path)
