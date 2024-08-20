import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col gap-3 mb-20">
      <div className="flex flex-row mb-3 mt-5 justify-between items-center text-white font-normal w-full px-5">
        <a href="/home" className="flex font-sans font-medium text-4xl text-red-700">
          <i className="fas fa-book"></i> BookPAD
        </a>

        <div className="hidden md:flex items-center w-1/3 h-10 overflow-hidden bg-white rounded-2xl ml-10">
          <input 
            type="search" 
            placeholder="Search here..." 
            className="text-xl py-2 h-full w-full text-black pl-3" 
          />
          <label htmlFor="search-box" className="fas fa-search text-black cursor-pointer text-2xl ml-2"></label>
        </div>

        <div className="flex items-center text-4xl ml-1 text-black cursor-pointer space-x-4">
          <div className="fas fa-search md:hidden cursor-pointer" onClick={toggleMenu}></div>
          <Link to="/favourites" className="fas fa-heart cursor-pointer"></Link>
          <Link to="/cart" className="fas fa-shopping-cart cursor-pointer"></Link>
          <Link to="/login" className="fas fa-user cursor-pointer"></Link>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block lg:flex flex-col md:flex-row gap-20 bg-red-700 align-center`}>
        <ul className="flex flex-col md:flex-row items-center list-none text-lg gap-10 text-white my-4 md:ml-20 md:mr-auto">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="flex flex-col md:flex-row gap-4 list-none mt-4 md:mr-10 md:ml-auto">
          <li><Link to="/login" className="rounded-full bg-white text-red-700 px-4 py-2 text-lg">Login</Link></li>
          <li><Link to="/signup" className="rounded-full text-white bg-red-700 px-4 py-2">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
