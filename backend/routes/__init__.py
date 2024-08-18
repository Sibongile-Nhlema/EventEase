from flask import Blueprint

# Import Blueprints
from .events import events
from .participants import participants

# Create a Blueprint for all routes
api_blueprint = Blueprint('api', __name__)

# Register Blueprints
api_blueprint.register_blueprint(events)
api_blueprint.register_blueprint(participants)
