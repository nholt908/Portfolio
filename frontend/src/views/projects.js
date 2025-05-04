import React, {useEffect} from 'react';
import ProjectsView from './projectsView';
import Header from '../components/header';
import Footer from '../components/footer';

function Projects(){
  useEffect(() => {
      fetch('http://localhost:5000/projects')
      .then(res => res.text())
      .then(data => {
        console.log('GET /projects response:', data);
      })
      .catch(err => console.error('GET /projects failed:', err));
    }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <ProjectsView />
      <Footer />
    </div>
)};

export default Projects;