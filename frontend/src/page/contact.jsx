import React, { useState } from "react";
import axios from "axios";
import "../css/contact.css";

import Footer from "../components/footer";
import Header from "../components/header"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/feedbacks/addfeedback",
        formData
      );
      setMessage(response.data.message || "Your message has been sent!");
      setError(""); 
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Error sending the message.");
      setMessage(""); 
    }
  };

  return (
    <div>
      <Header />

      <section className="contact-section">
        <div className="contact-form-container">
          <h1 className="contact-title">Contact Our Hotel</h1>
          <p className="contact-description">
            Have a question or need assistance? Please feel free to contact us via the form below. Our team will respond promptly to make your stay with us unforgettable.
          </p>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              type="text"
              className="contact-input"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              value={formData.email}
              type="email"
              className="contact-input"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <input
              name="subject"
              value={formData.subject}
              type="text"
              className="contact-input"
              placeholder="for which service"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              className="contact-textarea"
              placeholder="Your Message"
              rows="5"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-button">Send Message</button>
          </form>

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Email:</strong> contact@ourhotel.com</p>
            <p><strong>Phone:</strong> +251 920 000 123</p>
            <p><strong>Address:</strong> Main Street, Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
