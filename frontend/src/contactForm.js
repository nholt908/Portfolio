import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input name="email" type="email" value={formData.email} onChange={handleChange} required />

      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}
