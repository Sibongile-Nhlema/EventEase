from flask import jsonify
from app import mongo

def get_participants():
    try:
        participants_collection = mongo.db.participants
        participants = participants_collection.find()
        participant_list = []
        for participant in participants:
            participant_data = {
                'id': str(participant['_id']),
                'name': participant.get('name'),
                'email': participant.get('email'),
                'phone': participant.get('phone'),
                'registered_for': participant.get('registered_for')
            }
            participant_list.append(participant_data)
        return jsonify(participant_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching participants', 'details': str(e)}), 500
