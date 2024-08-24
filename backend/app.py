from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

# Initialize extensions
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

# Routes
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    mongo.db.users.insert_one({'email': email, 'password': hashed_password})
    return jsonify({'message': 'User registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = mongo.db.users.find_one({'email': email})

    if user:
        print('Stored Password Hash:', user['password'])
        print('Provided Password:', password)

    if user and bcrypt.check_password_hash(user['password'], password):
        token = jwt.encode({
            'email': email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    # In a stateless JWT authentication, there's no need to invalidate tokens on the server side.
    # Just removing the token on the client side is sufficient.
    return jsonify({'message': 'Successfully logged out'})

if __name__ == '__main__':
    app.run(debug=True)
