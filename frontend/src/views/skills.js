import React, {useEffect} from 'react';
import SkillsView from './skillsView';
import Header from '../components/header';
import Footer from '../components/footer';

function Skills(){
  useEffect(() => {
      fetch('http://localhost:5000/skills')
      .then(res => res.text())
      .then(data => {
        console.log('GET /skills response:', data);
      })
      .catch(err => console.error('GET /skills failed:', err));
    }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <SkillsView />
      <Footer />
    </div>
)};

export default Skills;