import React, {useEffect} from 'react';
import EducationView from './educationView';
import Header from '../components/header';
import Footer from '../components/footer';

function Education(){
  useEffect(() => {
      fetch('http://localhost:5000/education')
      .then(res => res.text())
      .then(data => {
        console.log('GET /education response:', data);
      })
      .catch(err => console.error('GET /education failed:', err));
    }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <EducationView />
      <Footer />
    </div>
)};

export default Education;