import React from 'react';
import '../styles/EventPage.css';


const EventPage = () => {
  return (
    <div className="Event-page">
      <header className="Event-header">
        <h1>Create Event</h1>

       
      </header>

      
  <form className="Event-registration-form">
    <label htmlFor="eventName">Event Name:</label>
    <input type="text" id="name" name="name" />

    

    <label htmlFor="eventStartDate">Event Start Date:</label>
    <input type="date" id="eventDate" name="eventDate" />

    
    <label htmlFor="eventTime">Event Start Time:</label>
    <input type="time" id="eventTime" name="eventTime" />

    <label htmlFor="eventDate">Event End Date:</label>
    <input type="date" id="eventDate" name="eventDate" />


    <label htmlFor="eventTime">Event End Time:</label>
    <input type="time" id="eventTime" name="eventTime" />
    
    <label htmlFor="eventLocation">Event Location:</label>
    <input type="text" id="eventLocation" name="eventLocation" />

    <label htmlFor="eventDescription">Event Description:</label>
    <textarea id="eventDescription" name="eventDescription"></textarea>
 

    <button type="submit">Create Event</button>
  </form>
  
    </div>
  );
};

export default EventPage;