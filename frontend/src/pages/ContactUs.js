import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? We're here to help. Reach out to
          us through the form below or connect with us on social media.
        </p>
      </header>
      <section className="contact-form">
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
      </section>
    </div>
  );
};

export default ContactUs;
