import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import mockEvents from '../data/mockData';

// Helper function to sort events
const sortEvents = (events) => {
  const now = new Date();
  return {
    upcoming: events.filter(event => new Date(event.date) >= now)
                    .sort((a, b) => new Date(a.date) - new Date(b.date)),
    past: events.filter(event => new Date(event.date) < now)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
  };
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', date: '', location: '' });
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    setEvents(mockEvents);
  }, []);

  const { upcoming, past } = sortEvents(events);

  const handleCreateOrUpdate = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(events.map(event =>
        event.id === editingEvent.id ? { ...event, ...formData } : event
      ));
      setEditingEvent(null);
    } else {
      setEvents([
        ...events,
        { id: Date.now(), ...formData }
      ]);
    }
    setFormData({ name: '', date: '', location: '' });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({ name: event.name, date: event.date, location: event.location });
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleViewDetails = (event) => {
    // Implement viewing details functionality here
    alert(`Viewing details for: ${event.name}`);
  };

  return (
    <div className="events-page">
      <h1>Events</h1>
      <p>Here you can manage all the events.</p>

      <form onSubmit={handleCreateOrUpdate} className="event-form">
        <h2>{editingEvent ? 'Edit Event' : 'Create Event'}</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Event Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        />
        <button type="submit">{editingEvent ? 'Update Event' : 'Create Event'}</button>
      </form>

      <div className="event-list">
        <h2>Upcoming Events</h2>
        <button onClick={() => setShowPastEvents(!showPastEvents)}>
          {showPastEvents ? 'View Upcoming Events' : 'View Past Events'}
        </button>
        <ul>
          {(showPastEvents ? past : upcoming).map(event => (
            <li key={event.id}>
              <span>{event.name} - {event.date} - {event.location}</span>
              <button onClick={() => handleViewDetails(event)}>View Details</button>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
