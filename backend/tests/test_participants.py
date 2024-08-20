from test_base import BaseTestCase
from flask import json

class TestParticipants(BaseTestCase):
    def test_get_participants(self):
        response = self.client.get('/api/participants')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json), 0)

    def test_create_participant(self):
        participant_data = {
            "name": "Test Participant",
            "email": "test@example.com",
            "phone": "123456789",
            "location": "Test Location",
            "occupation": "Test Occupation",
            "company": "Test Company",
            "registered_for": "Test Event"
        }
        response = self.client.post('/api/participants', data=json.dumps(participant_data), content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn('id', response.json)

    def test_get_participant(self):
        # First, create a participant
        participant_data = {
            "name": "Test Participant",
            "email": "test@example.com",
            "phone": "123456789",
            "location": "Test Location",
            "occupation": "Test Occupation",
            "company": "Test Company",
            "registered_for": "Test Event"
        }
        post_response = self.client.post('/api/participants', data=json.dumps(participant_data), content_type='application/json')
        participant_id = post_response.json['id']

        # Now, get the participant
        response = self.client.get(f'/api/participants/{participant_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['name'], participant_data['name'])

    def test_update_participant(self):
        # First, create a participant
        participant_data = {
            "name": "Test Participant",
            "email": "test@example.com",
            "phone": "123456789",
            "location": "Test Location",
            "occupation": "Test Occupation",
            "company": "Test Company",
            "registered_for": "Test Event"
        }
        post_response = self.client.post('/api/participants', data=json.dumps(participant_data), content_type='application/json')
        participant_id = post_response.json['id']

        # Now, update the participant
        updated_data = {
            "name": "Updated Test Participant"
        }
        response = self.client.put(f'/api/participants/{participant_id}', data=json.dumps(updated_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_delete_participant(self):
        # First, create a participant
        participant_data = {
            "name": "Test Participant",
            "email": "test@example.com",
            "phone": "123456789",
            "location": "Test Location",
            "occupation": "Test Occupation",
            "company": "Test Company",
            "registered_for": "Test Event"
        }
        post_response = self.client.post('/api/participants', data=json.dumps(participant_data), content_type='application/json')
        participant_id = post_response.json['id']

        # Now, delete the participant
        response = self.client.delete(f'/api/participants/{participant_id}')
        self.assertEqual(response.status_code, 200)

        # Ensure the participant no longer exists
        get_response = self.client.get(f'/api/participants/{participant_id}')
        self.assertEqual(get_response.status_code, 404)
