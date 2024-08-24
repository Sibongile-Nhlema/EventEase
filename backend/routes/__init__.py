from flask import Blueprint
from .events import events
from .participants import participants
from .admins import admins
from .companies import companies
from .registrations import registrations
from .auth import auth

# Create a Blueprint for all routes
api_blueprint = Blueprint('api', __name__)

# Register Blueprints
api_blueprint.register_blueprint(events)
api_blueprint.register_blueprint(participants)
api_blueprint.register_blueprint(admins)
api_blueprint.register_blueprint(companies)
api_blueprint.register_blueprint(registrations)
api_blueprint.register_blueprint(auth)
