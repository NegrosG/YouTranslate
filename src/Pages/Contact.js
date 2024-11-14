import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="feedback-section">
        <h1>Leave a Feedback &#10132;</h1>
        <h4>Feedback form &rarr;</h4>
        <p className="feedback-instruction">
          We love feedbacks, we hope to hear from you.
        </p>

        <form className="feedback-form" action="mailto:negrosmartins@gmail.com" method="GET" enctype="text/plain">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      </div>

      <div className="contact-details">
        <h1>Contact Information &#10132;</h1>
        <p>
        We welcome your feedback and inquiries. Whether you have questions, suggestions, or would like to share your experience with our app, please don’t hesitate to reach out. Our team is dedicated to supporting you and enhancing the app to best meet your needs.
        </p>

        <h3>Contact Information &#10132;</h3>
        <ul>
          <li><strong>Email:</strong> Negrosmartins@gmail.com</li>
          <li><strong>Phone:</strong> +2347073030090</li>
        </ul>

        <h3>&#10132;</h3>
        <p>Stay connected with us on social media.</p>
        <ul className='social-media-icons'>
        <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
