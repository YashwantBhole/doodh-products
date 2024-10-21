import React, { useEffect } from 'react';
import AOS from 'aos';
import landingImage from '../assets/landingImage.jpg';
import background from '../assets/background.jpg'
import doodhDeary from '../assets/doodhDeary.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
             <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">Join Us Today!</h2>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
          Sign up to get started with amazing features!
        </p>
       <Link to = '/signup'> <a
          href="#signup"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          data-aos="fade-up" data-aos-delay="400"
        >
          Sign Up
        </a></Link>
      </div>
        <div className="flex flex-col justify-start items-center h-full p-4 text-center">
          {/* <h1 className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Welcome to Doodh Deary</h1> */}
          {/* <p className="text-lg mb-8 md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="200">
            Discover amazing features and connect with us!
          </p> */}
        </div>
      </section>


{/* Features Section */}
<section id="features" className="py-10 bg-gray-100">
  <div className="p-4 container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div
        className="h-96 bg-white p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${doodhDeary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3 className="text-xl font-bold mb-2 text-black">Fresh Products</h3>
        <p className="text-balck font-bold">
          Our dairy products are sourced fresh daily to ensure the best quality for you.
        </p>
      </div>

      {/* Feature 2 */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full h-96"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          backgroundImage: `url(${feature2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3 className="text-xl font-bold mb-2 text-white">Direct Call Delivery</h3>
        <p className="text-white font-bold">
          Call us directly for quick and efficient delivery right to your doorstep.
        </p>
      </div>

      {/* Feature 3 */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg h-96"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{
          backgroundImage: `url(${feature3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3 className="text-xl font-bold mb-2 text-white">Natural Products</h3>
        <p className="text-white font-bold">
          Enjoy dairy products made from 100% natural ingredients without additives.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default LandingPage;
