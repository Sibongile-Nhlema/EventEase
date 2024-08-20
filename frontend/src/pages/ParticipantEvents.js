import React, { useState, useEffect } from 'react';
import '../styles/participants-events.css';

const ParticipantsEvents = () => {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [viewingPastEvents, setViewingPastEvents] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [qrCodeVisible, setQrCodeVisible] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');  // Fetch all events
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const fetchRegisteredEvents = async () => {
      try {
        const response = await fetch('/api/user/registered-events');  // Fetch user's registered events
        const data = await response.json();
        setRegisteredEvents(data);
      } catch (error) {
        console.error('Error fetching registered events:', error);
      }
    };

    fetchEvents();
    fetchRegisteredEvents();
  }, []);

  const handleRegister = async (eventId) => {
    if (window.confirm('Are you sure you want to register for this event?')) {
      try {
        await fetch(`/api/events/${eventId}/register`, { method: 'POST' });  // Register for event
        setConfirmationMessage('Request pending approval');
        setRegisteredEvents([...registeredEvents, eventId]);
      } catch (error) {
        console.error('Error registering for event:', error);
      }
    }
  };

  const handleDeregister = async (eventId) => {
    if (window.confirm('Are you sure you want to deregister from this event?')) {
      try {
        await fetch(`/api/events/${eventId}/deregister`, { method: 'POST' });  // Deregister from event
        setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
      } catch (error) {
        console.error('Error deregistering from event:', error);
      }
    }
  };

  const handleMarkAttendance = async (eventId) => {
    try {
      await fetch(`/api/events/${eventId}/mark-attendance`, { method: 'POST' });  // Mark attendance
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  const handleToggleView = () => {
    setViewingPastEvents(!viewingPastEvents);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setQrCodeVisible(true);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
    setQrCodeVisible(false);
  };

  const handleToggleQRCode = () => {
    setQrCodeVisible(!qrCodeVisible);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm)
  );

  const upcomingEvents = filteredEvents.filter(event => new Date(event.start_date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.start_date) < new Date());

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = (viewingPastEvents ? pastEvents : upcomingEvents).slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil((viewingPastEvents ? pastEvents.length : upcomingEvents.length) / eventsPerPage);

  return (
    <div className="participants-events-page">
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

      <div className="search-container">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="events-list">
        {currentEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{formatDate(event.start_date)} - {formatDate(event.end_date)}</p>
            {registeredEvents.includes(event.id) ? (
              <div>
                <button onClick={() => handleDeregister(event.id)} className="btn-deregister">
                  Deregister
                </button>
                <button onClick={() => handleMarkAttendance(event.id)} className="btn-attendance">
                  Mark Attendance
                </button>
                {confirmationMessage && <p>{confirmationMessage}</p>}
              </div>
            ) : (
              <button onClick={() => handleRegister(event.id)} className="btn-register">
                Register
              </button>
            )}
            <button onClick={() => handleEventClick(event)} className="btn-details">
              View Details
            </button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {selectedEvent && (
        <div className="event-details">
          <button onClick={handleCloseDetails} className="btn-close">Close</button>
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.description}</p>
          <p>{formatDate(selectedEvent.start_date)} - {formatDate(selectedEvent.end_date)}</p>
          <p>Location: {selectedEvent.location}</p>
          <p>Organizer: {selectedEvent.organizer}</p>
          {qrCodeVisible && (
            <div className="qr-code">
              <img src={selectedEvent.qr_code_url} alt="QR Code" />
              <button onClick={() => handleMarkAttendance(selectedEvent.id)} className="btn-attendance">
                Mark Attendance
              </button>
            </div>
          )}
          <button onClick={handleToggleQRCode} className="btn-toggle-qr">
            {qrCodeVisible ? 'Hide QR Code' : 'Show QR Code'}
          </button>
        </div>
      )}
    </div>
  );
};

// Utility function to format date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

export default ParticipantsEvents;
