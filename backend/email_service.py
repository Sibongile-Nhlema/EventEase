from flask_mail import Message
from flask import render_template, current_app
from app import mail

def send_email(to, subject, template, context):
    try:
        msg = Message(subject, recipients=[to])
        msg.body = render_template(f'{template}.txt', **context)  # Plain text version
        msg.html = render_template(f'{template}.html', **context)  # HTML version
        mail.send(msg)
        current_app.logger.info(f'Email sent to {to} with subject "{subject}"')
    except Exception as e:
        current_app.logger.error(f'Error sending email to {to}: {str(e)}')
    

def send_registration_confirmation(user, event):
    subject = f"Registration Confirmation for {event['title']}"
    template = 'registration_confirmation'
    context = {'user': user, 'event': event}
    send_email(user['email'], subject, template, context)

def send_event_reminder(user, event):
    subject = f"Reminder: {event['title']} is 3 days away"
    template = 'event_reminder'
    context = {'user': user, 'event': event}
    send_email(user['email'], subject, template, context)

def send_cancellation_confirmation(user, event):
    subject = f"Cancellation Confirmation for {event['title']}"
    template = 'cancellation_confirmation'
    context = {'user': user, 'event': event}
    send_email(user['email'], subject, template, context)

def send_event_update_notification(event):
    subject = f"Update: Changes to {event['title']}"
    template = 'event_update_notification'
    for user in event.get('invited_users', []):
        context = {'user': user, 'event': event}
        send_email(user['email'], subject, template, context)

def send_thank_you_email(user, event):
    subject = f"Thank You for Attending {event['title']}"
    template = 'thank_you_for_attending'
    context = {'user': user, 'event': event}
    send_email(user['email'], subject, template, context)
