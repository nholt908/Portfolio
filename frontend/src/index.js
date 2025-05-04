import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import IndexView from './IndexView';
import Header from './header';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <IndexView />
      <Footer />
    </div>
  </React.StrictMode>
);
