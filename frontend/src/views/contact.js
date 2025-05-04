import React, {useEffect} from 'react';
import ContactForm from './contactForm';
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

export default Contact;