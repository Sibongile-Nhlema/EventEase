import React from 'react';
import '../styles/ContactUs.css';
import customerServiceVideo from '../videos/customer-service.mp4'; // Import the video file

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-video">
        <video autoPlay muted loop>
          <source src={customerServiceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="contact-form">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have questions or need assistance? We're here to help. Reach out to
            us through the form below or connect with us on social media.
          </p>
        </header>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

