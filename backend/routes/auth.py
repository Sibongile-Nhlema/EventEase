from flask import Blueprint, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv

load_dotenv()

auth = Blueprint('auth', __name__)
mongo = PyMongo()
bcrypt = Bcrypt()

# Initialize extensions
def init_app(app):
    mongo.init_app(app)
    bcrypt.init_app(app)

@auth.route('/signup-login/<role>', methods=['POST'])
def signup_login(role):
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    phone = data.get('phone')
    location = data.get('location')
    occupation = data.get('occupation')
    company = data.get('company')

    if role == 'participant':
        if request.method == 'POST':
            if not email or not password:
                return jsonify({'message': 'Email and password required'}), 400
            
            if mongo.db.users.find_one({'email': email}):
                return jsonify({'message': 'User already exists'}), 400
            
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
            mongo.db.users.insert_one({
                'email': email,
                'password': hashed_password,
                'name': name,
                'phone': phone,
                'location': location,
                'occupation': occupation,
                'company': company
            })
            return jsonify({'message': 'Participant registered successfully'}), 201

    elif role == 'organizer':
        if request.method == 'POST':
            if not email or not password:
                return jsonify({'message': 'Email and password required'}), 400
            
            if mongo.db.users.find_one({'email': email}):
                return jsonify({'message': 'User already exists'}), 400
            
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
            mongo.db.users.insert_one({
                'email': email,
                'password': hashed_password
            })
            return jsonify({'message': 'Organizer registered successfully'}), 201

    return jsonify({'message': 'Invalid role or method'}), 400

@auth.route('/login/<role>', methods=['POST'])
def login(role):
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = mongo.db.users.find_one({'email': email})
    if user and bcrypt.check_password_hash(user['password'], password):
        token = jwt.encode({
            'email': email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, os.getenv('JWT_SECRET_KEY'), algorithm='HS256')
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401
