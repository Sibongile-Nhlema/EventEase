import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import mockEvents from '../data/mockData';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    description: ''
  });
  const [viewingPastEvents, setViewingPastEvents] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    setEvents(mockEvents);
  }, []);

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
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      description: ''
    });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      startDate: event.startDate,
      endDate: event.endDate,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location,
      description: event.description
    });
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleToggleView = () => {
    setViewingPastEvents(!viewingPastEvents);
  };

  // Function to format the date as dd-MMM-yyyy
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  // Filter events based on the current view
  const filteredEvents = events
    .filter(event => viewingPastEvents ? new Date(event.startDate) < new Date() : new Date(event.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  return (
    <div className="events-page">
      <div className="event-list">
        <header className="event-list-header">
          <div className="header-item">Event Name</div>
          <div className="header-item">Date</div>
          <div className="header-item">Options</div>
        </header>

        <div className="toggle-buttons">
          <div
            className={`toggle-btn ${!viewingPastEvents ? 'active' : ''}`}
            onClick={handleToggleView}
          >
            Upcoming Events
          </div>
          <div
            className={`toggle-btn ${viewingPastEvents ? 'active' : ''}`}
            onClick={handleToggleView}
          >
            Past Events
          </div>
        </div>

        <div className="event-list-box">
          <ul>
            {filteredEvents.map(event => (
              <li key={event.id}>
                <span className="event-name">{event.name}</span>
                <span className="date">{formatDate(event.startDate)}</span>
                <span className="actions">
                  <button className="btn-view" onClick={() => console.log('View', event)}>
                    <FaEye />
                  </button>
                  <button className="btn-edit" onClick={() => handleEdit(event)}>
                    <FaEdit />
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(event.id)}>
                    <FaTrashAlt />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="event-form">
        <header className="event-header">
          <h1>{editingEvent ? 'Edit Event' : 'Create Event'}</h1>
        </header>

        <form onSubmit={handleCreateOrUpdate} className="event-registration-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="inline-group">
            <div className="input-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="inline-group">
            <div className="input-group">
              <label htmlFor="startTime">Start Time:</label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="endTime">End Time:</label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                required
              />
            </div>
          </div>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />

          <button type="submit">{editingEvent ? 'Update Event' : 'Create Event'}</button>
        </form>
      </div>
    </div>
  );
};

export default Events;
