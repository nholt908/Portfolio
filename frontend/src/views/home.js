import React from 'react';
import HomeView from './HomeView';
import Header from '../components/header';
import Footer from '../components/footer';

function Home(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <HomeView />
      <Footer />
    </div>
)};

export default Home;