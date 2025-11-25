import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent: " + message);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
