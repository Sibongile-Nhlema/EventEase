from flask import Blueprint, request, jsonify
from backend.app import mongo
from bson.objectid import ObjectId

participants = Blueprint('participants', __name__)

# Create a new participant
@participants.route('/participants', methods=['POST'])
def create_participant():
    try:
        data = request.get_json()
        participants_collection = mongo.db.participants
        result = participants_collection.insert_one(data)
        new_participant = participants_collection.find_one({'_id': result.inserted_id})
        return jsonify({
            'id': str(new_participant['_id']),
            'name': new_participant.get('name'),
            'email': new_participant.get('email'),
            'phone': new_participant.get('phone'),
            'location': new_participant.get('location'),
            'occupation': new_participant.get('occupation'),
            'company': new_participant.get('company'),
            'registered_for': new_participant.get('registered_for')
        }), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred while creating the participant', 'details': str(e)}), 500

# Get all participants
@participants.route('/participants', methods=['GET'])
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
                'location': participant.get('location'),
                'occupation': participant.get('occupation'),
                'company': participant.get('company'),
                'registered_for': participant.get('registered_for')
            }
            participant_list.append(participant_data)
        return jsonify(participant_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching participants', 'details': str(e)}), 500

# Get a single participant by ID
@participants.route('/participants/<participant_id>', methods=['GET'])
def get_participant(participant_id):
    try:
        participants_collection = mongo.db.participants
        participant = participants_collection.find_one({'_id': ObjectId(participant_id)})
        if participant:
            return jsonify({
                'id': str(participant['_id']),
                'name': participant.get('name'),
                'email': participant.get('email'),
                'phone': participant.get('phone'),
                'location': participant.get('location'),
                'occupation': participant.get('occupation'),
                'company': participant.get('company'),
                'registered_for': participant.get('registered_for')
            })
        else:
            return jsonify({'error': 'Participant not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching the participant', 'details': str(e)}), 500

# Update a participant by ID
@participants.route('/participants/<participant_id>', methods=['PUT'])
def update_participant(participant_id):
    try:
        data = request.get_json()
        participants_collection = mongo.db.participants
        result = participants_collection.update_one({'_id': ObjectId(participant_id)}, {'$set': data})
        if result.matched_count:
            updated_participant = participants_collection.find_one({'_id': ObjectId(participant_id)})
            return jsonify({
                'id': str(updated_participant['_id']),
                'name': updated_participant.get('name'),
                'email': updated_participant.get('email'),
                'phone': updated_participant.get('phone'),
                'location': updated_participant.get('location'),
                'occupation': updated_participant.get('occupation'),
                'company': updated_participant.get('company'),
                'registered_for': updated_participant.get('registered_for')
            })
        else:
            return jsonify({'error': 'Participant not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while updating the participant', 'details': str(e)}), 500

# Delete a participant by ID
@participants.route('/participants/<participant_id>', methods=['DELETE'])
def delete_participant(participant_id):
    try:
        participants_collection = mongo.db.participants
        result = participants_collection.delete_one({'_id': ObjectId(participant_id)})
        if result.deleted_count:
            return jsonify({'message': 'Participant deleted successfully'})
        else:
            return jsonify({'error': 'Participant not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while deleting the participant', 'details': str(e)}), 500
