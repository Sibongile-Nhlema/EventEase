import unittest
from backend.app import app, mongo
from flask_testing import TestCase

class BaseTestCase(TestCase):
    def create_app(self):
        app.config['TESTING'] = True
        app.config['MONGO_URI'] = 'mongodb://localhost:27017/test_db'
        return app

    def setUp(self):
        # This will run before each test
        with app.app_context():
            mongo.db.events.delete_many({})
            mongo.db.participants.delete_many({})

    def tearDown(self):
        # This will run after each test
        with app.app_context():
            mongo.db.events.delete_many({})
            mongo.db.participants.delete_many({})

