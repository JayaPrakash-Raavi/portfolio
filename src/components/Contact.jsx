import React, { useState } from "react";
import emailjs from "@emailjs/browser"; 
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    tempErrors.name = formData.name.trim() ? "" : "Name is required!";
    tempErrors.email = formData.email.trim()
      ? emailRegex.test(formData.email)
        ? ""
        : "Enter a valid email!"
      : "Email is required!";
    tempErrors.message = formData.message.trim() ? "" : "Message is required!";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((err) => err === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceID = "service_84r9qsg"; // Replace with EmailJS Service ID
    const templateID = "template_rtxmui2"; // Replace with EmailJS Template ID
    const userID = "9uT_tYYcAHN1o0eSe"; // Replace with EmailJS Public Key

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSent(false), 3000); // Hide message after 3 sec
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">Send me a message!</p>
          <p>📧 Email: <a href="mailto:jpn9121@gmail.com">jpn9121@gmail.com</a></p>
          <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/jaya-prakash-narayana-raavi" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a></p>
          <p>💻 GitHub: <a href="https://github.com/JayaPrakash-Raavi" target="_blank" rel="noopener noreferrer">Check My Work</a></p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">Send a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              className={`input-field ${errors.name ? "error" : ""}`}
              placeholder={errors.name || "Your Name"}
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className={`input-field ${errors.email ? "error" : ""}`}
              placeholder={errors.email || "Your Email"}
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              className={`input-field textarea ${errors.message ? "error" : ""}`}
              placeholder={errors.message || "Your Message"}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="send-button">📩 Send Message</button>

            {isSent && <p className="success-message">✅ Message Sent Successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
