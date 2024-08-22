// Navbar.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className='navbar'
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-left">
        <motion.img
          src={logo}
          alt=""
          whileHover={{ scale: 1.1, rotate: 5 }} // Logo hover effect
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <ul>
          {['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by language'].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#e50914' }}  
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <motion.img
          src={search_icon}
          alt=""
          className='icons'
          whileHover={{ scale: 1.2 }}  
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.p
          whileHover={{ color: '#e50914' }}  
          transition={{ duration: 0.3 }}
        >
          Children
        </motion.p>
        <motion.img
          src={bell_icon}
          alt=""
          className='icons'
          whileHover={{ scale: 1.2 }}  
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <div className="navbar-profile">
          <motion.img
            src={profile_img}
            alt=""
            className='profile'
            whileHover={{ scale: 1.1 }}   
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.img
            src={caret_icon}
            alt=""
            whileHover={{ rotate: 180 }}  
            transition={{ duration: 0.3 }}
          />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign Out</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
