import React from 'react';
import SkillsView from './skillsView';
import Header from '../components/header';
import Footer from '../components/footer';

function Skills(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <SkillsView />
      <Footer />
    </div>
)};

export default Skills;