from flask import Blueprint, request, jsonify
from backend.app import mongo
from bson.objectid import ObjectId

admins = Blueprint('admins', __name__)

# Create a new admin/organizer
@admins.route('/admins', methods=['POST'])
def create_admin():
    try:
        data = request.get_json()
        admins_collection = mongo.db.admins
        result = admins_collection.insert_one(data)
        new_admin = admins_collection.find_one({'_id': result.inserted_id})
        return jsonify({
            'id': str(new_admin['_id']),
            'name': new_admin.get('name'),
            'email': new_admin.get('email'),
            'phone': new_admin.get('phone'),
            'role': new_admin.get('role')
        }), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred while creating the admin', 'details': str(e)}), 500

# Get all admins/organizers
@admins.route('/admins', methods=['GET'])
def get_admins():
    try:
        admins_collection = mongo.db.admins
        admins = admins_collection.find()
        admin_list = []
        for admin in admins:
            admin_data = {
                'id': str(admin['_id']),
                'name': admin.get('name'),
                'email': admin.get('email'),
                'phone': admin.get('phone'),
                'role': admin.get('role')
            }
            admin_list.append(admin_data)
        return jsonify(admin_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching admins', 'details': str(e)}), 500

# Get a single admin/organizer by ID
@admins.route('/admins/<admin_id>', methods=['GET'])
def get_admin(admin_id):
    try:
        admins_collection = mongo.db.admins
        admin = admins_collection.find_one({'_id': ObjectId(admin_id)})
        if admin:
            return jsonify({
                'id': str(admin['_id']),
                'name': admin.get('name'),
                'email': admin.get('email'),
                'phone': admin.get('phone'),
                'role': admin.get('role')
            })
        else:
            return jsonify({'error': 'Admin not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching the admin', 'details': str(e)}), 500

# Update an admin/organizer by ID
@admins.route('/admins/<admin_id>', methods=['PUT'])
def update_admin(admin_id):
    try:
        data = request.get_json()
        admins_collection = mongo.db.admins
        result = admins_collection.update_one({'_id': ObjectId(admin_id)}, {'$set': data})
        if result.matched_count:
            updated_admin = admins_collection.find_one({'_id': ObjectId(admin_id)})
            return jsonify({
                'id': str(updated_admin['_id']),
                'name': updated_admin.get('name'),
                'email': updated_admin.get('email'),
                'phone': updated_admin.get('phone'),
                'role': updated_admin.get('role')
            })
        else:
            return jsonify({'error': 'Admin not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while updating the admin', 'details': str(e)}), 500

# Delete an admin/organizer by ID
@admins.route('/admins/<admin_id>', methods=['DELETE'])
def delete_admin(admin_id):
    try:
        admins_collection = mongo.db.admins
        result = admins_collection.delete_one({'_id': ObjectId(admin_id)})
        if result.deleted_count:
            return jsonify({'message': 'Admin deleted successfully'})
        else:
            return jsonify({'error': 'Admin not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while deleting the admin', 'details': str(e)}), 500
