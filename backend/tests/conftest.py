import pytest
from app import create_app, db

@pytest.fixture(scope='module')
def test_client():
    # Set up the Flask test client
    flask_app = create_app('testing')

    # Flask provides a way to test your application by exposing the Werkzeug test Client
    testing_client = flask_app.test_client()

    # Establish an application context before running the tests.
    ctx = flask_app.app_context()
    ctx.push()

    yield testing_client  # this is where the testing happens!

    ctx.pop()

@pytest.fixture(scope='module')
def init_database():
    # Create the database and the database table
    db.create_all()

    # Insert test data into tables

    yield db  # this is where the testing happens!

    db.drop_all()
