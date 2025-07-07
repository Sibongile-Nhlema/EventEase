def handle_db_error(error_message, details):
    return jsonify({'error': error_message, 'details': details}), 500
