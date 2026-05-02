import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Contact(){
  useEffect(() => {
    fetch('http://localhost:5000/contact')
    .then(res => res.text())
    .then(data => {
      console.log('GET /contact response:', data);
    })
    .catch(err => console.error('GET /contact failed:', err));
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <ContactForm />
      <Footer />
    </div>
)};

function ContactForm() {
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

    const response = await fetch('http://localhost:5000/contact', {
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
    <main>
      <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-6">
        <h1 className='text-5xl'>Reach me here!</h1>
        <ul>
          <li>Email: <a href="mailto:nicoleholt90888@gmail.com" className='underline text-darkcolor dark:text-lightcolor'>nicoleholt90888@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/nicole-holt-17ab53332/" target="_blank" rel="noopener noreferrer" className='underline text-darkcolor dark:text-lightcolor'>Nicole Holt</a></li>
          <li>GitHub: <a href="https://github.com/nholt908" target="_blank" rel="noopener noreferrer" className='underline text-darkcolor dark:text-lightcolor'>nholt908</a></li>
        </ul>
      </div>
      <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-6">
        <h1 className='text-5xl'>Leave a message!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-3/4 gap-4">
          <div className='flex items-center justify-between border-2 rounded-2xl border-accentcolor p-2'>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} required className='bg-lightestcolor text-darkestcolor rounded-xl p-2'/>
          </div>
          <div className='flex items-center justify-between border-2 rounded-2xl border-accentcolor p-2'>
            <label>Email:</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required className='bg-lightestcolor text-darkestcolor rounded-xl p-2'/>
          </div>
          <div className='flex items-center justify-between border-2 rounded-2xl border-accentcolor p-2'>
            <label className='mr-2'>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required className='bg-lightestcolor text-darkestcolor rounded-xl p-2'/>
          </div>
          <button type="submit" className='hover:cursor-pointer border-2 rounded-2xl border-accentcolor bg-darkcolor dark:bg-lightcolor text-lightestcolor dark:text-darkestcolor hover:text-lightestcolor hover:bg-darkestcolor'>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;