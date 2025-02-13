import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaUser, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">Let's connect and discuss exciting opportunities!</p>

          <div className="contact-details">
            <p><FaEnvelope className="icon hover-effect" /> <a href="mailto:jpn9121@gmail.com">jpn9121@gmail.com</a></p>
            <p><FaLinkedin className="icon hover-effect" /> <a href="https://www.linkedin.com/in/jaya-prakash-narayana-raavi" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a></p>
            <p><FaGithub className="icon hover-effect" /> <a href="https://github.com/JayaPrakash-Raavi" target="_blank" rel="noopener noreferrer">Check My GitHub</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser className="input-icon" />
              <input type="text" name="name" required value={formData.name} onChange={handleChange} />
              <label>Your Name</label>
            </div>

            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              <label>Your Email</label>
            </div>

            <div className="form-group">
              <textarea name="message" required value={formData.message} onChange={handleChange}></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane className="send-icon" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
