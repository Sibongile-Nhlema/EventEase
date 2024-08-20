from flask import Blueprint, request, jsonify
from backend.app import mongo
from bson.objectid import ObjectId

companies = Blueprint('companies', __name__)

# Create a new company
@companies.route('/companies', methods=['POST'])
def create_company():
    try:
        data = request.get_json()
        companies_collection = mongo.db.companies
        result = companies_collection.insert_one(data)
        new_company = companies_collection.find_one({'_id': result.inserted_id})
        return jsonify({
            'id': str(new_company['_id']),
            'name': new_company.get('name'),
            'industry': new_company.get('industry'),
            'contact_email': new_company.get('contact_email'),
            'contact_phone': new_company.get('contact_phone'),
            'address': new_company.get('address')
        }), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred while creating the company', 'details': str(e)}), 500

# Get all companies
@companies.route('/companies', methods=['GET'])
def get_companies():
    try:
        companies_collection = mongo.db.companies
        companies = companies_collection.find()
        company_list = []
        for company in companies:
            company_data = {
                'id': str(company['_id']),
                'name': company.get('name'),
                'industry': company.get('industry'),
                'contact_email': company.get('contact_email'),
                'contact_phone': company.get('contact_phone'),
                'address': company.get('address')
            }
            company_list.append(company_data)
        return jsonify(company_list)
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching companies', 'details': str(e)}), 500

# Get a single company by ID
@companies.route('/companies/<company_id>', methods=['GET'])
def get_company(company_id):
    try:
        companies_collection = mongo.db.companies
        company = companies_collection.find_one({'_id': ObjectId(company_id)})
        if company:
            return jsonify({
                'id': str(company['_id']),
                'name': company.get('name'),
                'industry': company.get('industry'),
                'contact_email': company.get('contact_email'),
                'contact_phone': company.get('contact_phone'),
                'address': company.get('address')
            })
        else:
            return jsonify({'error': 'Company not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while fetching the company', 'details': str(e)}), 500

# Update a company by ID
@companies.route('/companies/<company_id>', methods=['PUT'])
def update_company(company_id):
    try:
        data = request.get_json()
        companies_collection = mongo.db.companies
        result = companies_collection.update_one({'_id': ObjectId(company_id)}, {'$set': data})
        if result.matched_count:
            updated_company = companies_collection.find_one({'_id': ObjectId(company_id)})
            return jsonify({
                'id': str(updated_company['_id']),
                'name': updated_company.get('name'),
                'industry': updated_company.get('industry'),
                'contact_email': updated_company.get('contact_email'),
                'contact_phone': updated_company.get('contact_phone'),
                'address': updated_company.get('address')
            })
        else:
            return jsonify({'error': 'Company not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while updating the company', 'details': str(e)}), 500

# Delete a company by ID
@companies.route('/companies/<company_id>', methods=['DELETE'])
def delete_company(company_id):
    try:
        companies_collection = mongo.db.companies
        result = companies_collection.delete_one({'_id': ObjectId(company_id)})
        if result.deleted_count:
            return jsonify({'message': 'Company deleted successfully'})
        else:
            return jsonify({'error': 'Company not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while deleting the company', 'details': str(e)}), 500
