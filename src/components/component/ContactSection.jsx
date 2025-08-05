import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css';
import Header from '../homeComponents/Header';
import Footer from '../homeComponents/Footer';

const ContactSection = () => {
  return (
    <>
      <Header />
      <section className="contact-section">

        <div className="contact-cards">
          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <h4>102 Street 2714 Donovan</h4>
            <p>Lorem ipsum dolar site amet discont</p>
          </div>
          <div className="card">
            <FaPhoneAlt className="icon" />
            <h4>+02 1234 567 88</h4>
            <p>Lorem ipsum dolar site amet discont</p>
          </div>
          <div className="card">
            <FaEnvelope className="icon" />
            <h4>info@example.com</h4>
            <p>Lorem ipsum dolar site amet discont</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <p>we will happy to send us your opinion</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your Phone" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;
