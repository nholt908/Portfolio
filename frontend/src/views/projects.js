import React from 'react';
import ProjectsView from './projectsView';
import Header from '../components/header';
import Footer from '../components/footer';

function Projects(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <ProjectsView />
      <Footer />
    </div>
)};

export default Projects;