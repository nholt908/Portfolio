import React from 'react';
import EducationView from './educationView';
import Header from '../components/header';
import Footer from '../components/footer';

function Education(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <EducationView />
      <Footer />
    </div>
)};

export default Education;