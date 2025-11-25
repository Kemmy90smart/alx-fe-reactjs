import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\nName: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "green" }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px", height: "100px" }}
        />
        <button type="submit" style={{ padding: "8px 16px", backgroundColor: "blue", color: "white" }}>Send</button>
      </form>
    </div>
  );
}
