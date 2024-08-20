import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import EventPopup from '../components/EventPopup';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    location: '',
    description: ''
  });
  const [viewingPastEvents, setViewingPastEvents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
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
    resetForm();
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      start_date: event.start_date,
      end_date: event.end_date,
      start_time: event.start_time,
      end_time: event.end_time,
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

  const handleCancel = () => {
    resetForm();
    setEditingEvent(null);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      start_date: '',
      end_date: '',
      start_time: '',
      end_time: '',
      location: '',
      description: ''
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleView = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const filteredEvents = events
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.start_date.includes(searchQuery);
      const isPastEvent = new Date(event.start_date) < new Date();
      return matchesSearch && (viewingPastEvents ? isPastEvent : !isPastEvent);
    })
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="events-page">
      <div className="event-list">
        <header className="event-list-header">
          <div className="header-item">Event Title</div>
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

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title, date, or location"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="event-list-box">
          <ul>
            {currentEvents.map(event => (
              <li key={event.id}>
                <span className="event-title">{event.title}</span>
                <span className="date">{formatDate(event.start_date)}</span>
                <span className="actions">
                  <button className="btn-view" onClick={() => handleView(event)}>
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

        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredEvents.length / eventsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="event-form">
        <header className="event-header">
          <h1>{editingEvent ? 'Edit Event' : 'Create Event'}</h1>
        </header>

        <form onSubmit={handleCreateOrUpdate} className="event-registration-form">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />

          <div className="inline-group">
            <div className="input-group">
              <label htmlFor="start_date">Start Date:</label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="end_date">End Date:</label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="inline-group">
            <div className="input-group">
              <label htmlFor="start_time">Start Time:</label>
              <input
                type="time"
                id="start_time"
                name="start_time"
                value={formData.start_time}
                onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="end_time">End Time:</label>
              <input
                type="time"
                id="end_time"
                name="end_time"
                value={formData.end_time}
                onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
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
          ></textarea>

          <button type="submit" className="btn-submit">
            {editingEvent ? 'Update Event' : 'Create Event'}
          </button>
          {editingEvent && (
            <button type="button" onClick={handleCancel} className="btn-cancel">
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <EventPopup event={selectedEvent} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

// Utility function to format date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

export default Events;
