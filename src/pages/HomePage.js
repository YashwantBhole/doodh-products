import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../products';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
    {/* header section */}
    <Header/>

    {/* landing page */}
    <LandingPage/>

   {/* footer section */}
   <Footer/>
    </>
  );
};

export default HomePage;
