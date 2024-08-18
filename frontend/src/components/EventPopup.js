// src/components/EventPopup.js
import React from 'react';
import '../styles/Events.css'; // Ensure this path is correct

const EventPopup = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="event-popup">
      <div className="popup-content">
        <h2>{event.title}</h2>
        <p><strong>Start Date:</strong> {formatDate(event.start_date)}</p>
        <p><strong>End Date:</strong> {formatDate(event.end_date)}</p>
        <p><strong>Start Time:</strong> {event.start_time}</p>
        <p><strong>End Time:</strong> {event.end_time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <button onClick={onClose} className="btn-close">Close</button>
      </div>
    </div>
  );
};

// Utility function to format date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

export default EventPopup;
