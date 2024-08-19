from test_base import BaseTestCase
from flask import json

class TestEvents(BaseTestCase):
    def test_get_events(self):
        response = self.client.get('/api/events')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json), 0)

    def test_create_event(self):
        event_data = {
            "title": "Test Event",
            "description": "This is a test event",
            "start_date": "2024-08-19",
            "start_time": "10:00",
            "end_date": "2024-08-19",
            "end_time": "12:00",
            "location": "Test Location",
            "created_by": "Test User"
        }
        response = self.client.post('/api/events', data=json.dumps(event_data), content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn('id', response.json)

    def test_get_event(self):
        # First, create an event
        event_data = {
            "title": "Test Event",
            "description": "This is a test event",
            "start_date": "2024-08-19",
            "start_time": "10:00",
            "end_date": "2024-08-19",
            "end_time": "12:00",
            "location": "Test Location",
            "created_by": "Test User"
        }
        post_response = self.client.post('/api/events', data=json.dumps(event_data), content_type='application/json')
        event_id = post_response.json['id']

        # Now, get the event
        response = self.client.get(f'/api/events/{event_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['title'], event_data['title'])

    def test_update_event(self):
        # First, create an event
        event_data = {
            "title": "Test Event",
            "description": "This is a test event",
            "start_date": "2024-08-19",
            "start_time": "10:00",
            "end_date": "2024-08-19",
            "end_time": "12:00",
            "location": "Test Location",
            "created_by": "Test User"
        }
        post_response = self.client.post('/api/events', data=json.dumps(event_data), content_type='application/json')
        event_id = post_response.json['id']

        # Now, update the event
        updated_data = {
            "title": "Updated Test Event"
        }
        response = self.client.put(f'/api/events/{event_id}', data=json.dumps(updated_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Event updated successfully')

    def test_delete_event(self):
        # First, create an event
        event_data = {
            "title": "Test Event",
            "description": "This is a test event",
            "start_date": "2024-08-19",
            "start_time": "10:00",
            "end_date": "2024-08-19",
            "end_time": "12:00",
            "location": "Test Location",
            "created_by": "Test User"
        }
        post_response = self.client.post('/api/events', data=json.dumps(event_data), content_type='application/json')
        event_id = post_response.json['id']

        # Now, delete the event
        response = self.client.delete(f'/api/events/{event_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Event deleted successfully')

        # Ensure the event no longer exists
        get_response = self.client.get(f'/api/events/{event_id}')
        self.assertEqual(get_response.status_code, 404)
