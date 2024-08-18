from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime, timedelta
from app import app, mongo
from models.events import Event
from email_service import send_event_reminder

def schedule_event_reminders():
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=check_for_reminders, trigger="interval", days=1)
    scheduler.start()

def check_for_reminders():
    with app.app_context():
        event_model = Event(mongo)
        three_days_away = datetime.now() + timedelta(days=3)
        events = event_model.find_upcoming_events(datetime.now())

        for event in events:
            # Replace with how you get the invited users from the event data
            for user in event.get('invited_users', []):
                send_event_reminder(user, event)
vv