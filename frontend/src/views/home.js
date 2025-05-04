import React, {useEffect} from 'react';
import HomeView from './HomeView';
import Header from '../components/header';
import Footer from '../components/footer';

function Home(){
  useEffect(() => {
      fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => {
        console.log('GET / response:', data);
      })
      .catch(err => console.error('GET / failed:', err));
    }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <HomeView />
      <Footer />
    </div>
)};

export default Home;