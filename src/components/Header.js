import React  from 'react';
import { FaGlassWhiskey } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  

  return (
    <header className={`bg-white dark:bg-gray-800 p-4 flex justify-between items-center`}>
     <Link to= '/'> <div className="flex items-center cursor-pointer">
        <FaGlassWhiskey className='text-white hover:text-blue-400' size={40}/>
        <span className="text-xl font-bold text-gray-800 dark:text-white ">
        Doodh Dairy
        </span>
      </div></Link>

      <div className="flex items-center space-x-4">
        <Link to ='/products'><a 
          href="/products" 
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
         Products
          </a></Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to = '/signin'><a 
          href="/signin" 
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In
          </a></Link>
      </div>
    </header>
  );
};

export default Header;
