from flask import Blueprint, request, jsonify
from backend.app import mongo
from bson.objectid import ObjectId

registrations = Blueprint('registrations', __name__)

# Create a new registration request
@registrations.route('/registrations', methods=['POST'])
def create_registration():
    try:
        data = request.get_json()
        data['status'] = 'pending'  # Set default status to 'pending'
        registrations_collection = mongo.db.registrations
        result = registrations_collection.insert_one(data)
        new_registration = registrations_collection.find_one({'_id': result.inserted_id})
        return jsonify({
            'id': str(new_registration['_id']),
            'participant_id': new_registration.get('participant_id'),
            'event_id': new_registration.get('event_id'),
            'status': new_registration.get('status'),
            'created_at': str(new_registration.get('created_at'))
        }), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred while creating the registration', 'details': str(e)}), 500

# Get all registration requests
@registrations.route('/registrations', methods=['GET'])
def get_registrations():
    try:
        registrations_collection = mongo.db.registrations
        registrations = registrations_collection.find()
        registration_list = []
        for registration in registrations:
            registration_data = {
                'id': str(registration['_id']),
                'participant_id': registration.get('participant_id'),
                'event_id': registration.get('event_id'),
                'status': registration.get('status'),
                'created_at': str(registration.get('created_at'))
            }
            registration_list.append(registration_data)
        return jsonify(registration_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching registrations', 'details': str(e)}), 500

# Get a single registration request by ID
@registrations.route('/registrations/<registration_id>', methods=['GET'])
def get_registration(registration_id):
    try:
        registrations_collection = mongo.db.registrations
        registration = registrations_collection.find_one({'_id': ObjectId(registration_id)})
        if registration:
            return jsonify({
                'id': str(registration['_id']),
                'participant_id': registration.get('participant_id'),
                'event_id': registration.get('event_id'),
                'status': registration.get('status'),
                'created_at': str(registration.get('created_at'))
            })
        else:
            return jsonify({'error': 'Registration not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching the registration', 'details': str(e)}), 500

# Update a registration request by ID (for admin approval/rejection)
@registrations.route('/registrations/<registration_id>', methods=['PUT'])
def update_registration(registration_id):
    try:
        data = request.get_json()
        registrations_collection = mongo.db.registrations
        result = registrations_collection.update_one({'_id': ObjectId(registration_id)}, {'$set': data})
        if result.matched_count:
            updated_registration = registrations_collection.find_one({'_id': ObjectId(registration_id)})
            return jsonify({
                'id': str(updated_registration['_id']),
                'participant_id': updated_registration.get('participant_id'),
                'event_id': updated_registration.get('event_id'),
                'status': updated_registration.get('status'),
                'created_at': str(updated_registration.get('created_at'))
            })
        else:
            return jsonify({'error': 'Registration not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while updating the registration', 'details': str(e)}), 500

# Delete a registration request by ID
@registrations.route('/registrations/<registration_id>', methods=['DELETE'])
def delete_registration(registration_id):
    try:
        registrations_collection = mongo.db.registrations
        result = registrations_collection.delete_one({'_id': ObjectId(registration_id)})
        if result.deleted_count:
            return jsonify({'message': 'Registration deleted successfully'})
        else:
            return jsonify({'error': 'Registration not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while deleting the registration', 'details': str(e)}), 500
