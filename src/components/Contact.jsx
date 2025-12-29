import React, { useState } from "react";

// Import team images
import exec1 from "../assets/exec1.JPG";
import exec2 from "../assets/exec2.JPG";
import exec3 from "../assets/exec3.JPG";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been submitted.`);
    setForm({ name: "", email: "", message: "" });
  };

  const executives = [
    { id: 1, name: "John Smith", role: "Chief Marketing Officer", email: "john@company.com", phone: "+1 234-567-8901", image: exec1 },
    { id: 2, name: "Jane Doe", role: "Sales & Components Executive", email: "jane@company.com", phone: "+1 234-567-8902", image: exec2 },
    { id: 3, name: "Robert Lee", role: "Business & Operations Administrator", email: "robert@company.com", phone: "+1 234-567-8903", image: exec3 },
  ];

  return (
    <section style={{ background: "#020617", color: "white", padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", color: "#facc15", marginBottom: "40px" }}>Contact Us</h2>
      
      {/* Contact Info & Form */}
      <div className="contact-container">
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>123 Industrial Lane, Factory City, Country 45678</p>

          <h3>Phone</h3>
          <p>+1 (234) 567-8901</p>

          <h3>Email</h3>
          <p>info@manufacturingfactory.com</p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Executives Cards */}
      <h2 style={{ textAlign: "center", color: "#facc15", margin: "60px 0 40px" }}>Our Executives</h2>
      <div className="executives-container">
        {executives.map((exec) => (
          <div key={exec.id} className="exec-card">
            <img src={exec.image} alt={exec.name} />
            <h3>{exec.name}</h3>
            <p className="role">{exec.role}</p>
            <p className="email">{exec.email}</p>
            <p className="phone">{exec.phone}</p>
          </div>
        ))}
      </div>

      <style>{`
        .contact-container {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
        }

        .contact-info h3 {
          color: #facc15;
          margin-bottom: 8px;
        }

        .contact-info p {
          color: #e5e7eb;
          margin-bottom: 20px;
        }

        .contact-form {
          flex: 1;
          min-width: 300px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 16px;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 1rem;
        }

        .contact-form button {
          padding: 14px 30px;
          background-color: #facc15;
          color: #020617;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #eab308;
        }

        /* Executives Cards */
        .executives-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .exec-card {
          background: #1e293b;
          border-radius: 12px;
          padding: 20px;
          width: 320px;
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .exec-card:hover {
          transform: translateY(-5px);
        }

        .exec-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .exec-card h3 {
          color: #facc15;
          margin-bottom: 4px;
        }

        .exec-card .role {
          color: #cbd5f5;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .exec-card .email,
        .exec-card .phone {
          color: #a5b4fc;
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
