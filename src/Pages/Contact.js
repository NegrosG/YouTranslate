import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have feedback, questions, or just want to share your experience with our app, feel free to reach out. Our team is here to support you and make this app as helpful as possible.
      </p>

      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> support@translationapp.com</li>
        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
        <li><strong>Available:</strong> Monday to Friday, 9 AM to 5 PM</li>
      </ul>

      <h2>Social Media</h2>
      <p>Stay connected with us on social media for the latest updates and improvements:</p>
      <ul>
        <li><strong>Facebook:</strong> <a href="#" target="_blank" rel="noopener noreferrer">TranslationAppFacebook</a></li>
        <li><strong>Twitter:</strong> <a href="#" target="_blank" rel="noopener noreferrer">TranslationAppTwitter</a></li>
        <li><strong>Instagram:</strong> <a href="#" target="_blank" rel="noopener noreferrer">TranslationAppInsta</a></li>
      </ul>

      <h2>Feedback Form</h2>
      <p>Your feedback is invaluable to us as we work to improve and expand the app’s features. Please use the form below to share any suggestions or comments directly with us.</p>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', marginTop: '5px' }}></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;