import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import mockEvents from '../data/mockData';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

// Mock data for companies and users
const companies = [
  { id: 1, name: 'Company 1' },
  { id: 2, name: 'Company 2' },
  { id: 3, name: 'Company 3' }
];

const usersByCompany = {
  1: ['User A', 'User B'],
  2: ['User C', 'User D'],
  3: ['User E', 'User F']
};

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
    description: '',
    company: '',
    invitedUsers: []
  });
  const [viewingPastEvents, setViewingPastEvents] = useState(false);

  // Simulate fetching data from an API
  useEffect(() => {
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
    resetForm();
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
      description: event.description,
      company: event.company || '',
      invitedUsers: event.invitedUsers || []
    });
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleToggleView = () => {
    setViewingPastEvents(!viewingPastEvents);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      description: '',
      company: '',
      invitedUsers: []
    });
  };

  const handleCompanyChange = (e) => {
    const selectedCompanyId = e.target.value;
    setFormData({
      ...formData,
      company: selectedCompanyId,
      invitedUsers: [] // Clear previous invitations when company changes
    });
  };

  const handleUserSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({
      ...formData,
      invitedUsers: selectedOptions
    });
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

          {/* Dropdown for selecting company */}
          <label htmlFor="company">Company:</label>
          <select
            id="company"
            name="company"
            value={formData.company}
            onChange={handleCompanyChange}
            required
          >
            <option value="">Select Company</option>
            {companies.map(company => (
              <option key={company.id} value={company.id}>{company.name}</option>
            ))}
          </select>

          {/* Dropdown for selecting users based on the selected company */}
          {formData.company && (
            <>
              <label htmlFor="invitedUsers">Invite Users:</label>
              <select
                id="invitedUsers"
                name="invitedUsers"
                multiple
                value={formData.invitedUsers}
                onChange={handleUserSelection}
              >
                {usersByCompany[formData.company]?.map(user => (
                  <option key={user} value={user}>{user}</option>
                ))}
              </select>
            </>
          )}

          <button type="submit">{editingEvent ? 'Update Event' : 'Create Event'}</button>
        </form>
      </div>
    </div>
  );
};

export default Events;
