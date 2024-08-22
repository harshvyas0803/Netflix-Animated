 
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <motion.div
      className='footer'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-icons">
        {[
          { src: facebook_icon, alt: 'Facebook' },
          { src: instagram_icon, alt: 'Instagram' },
          { src: twitter_icon, alt: 'Twitter' },
          { src: youtube_icon, alt: 'YouTube' }
        ].map((icon, index) => (
          <motion.img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className='footer-icon'
            whileHover={{ scale: 1.2, rotate: 15 }} //  
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
      <ul>
        {[
          'Audio Description', 'Help Center', 'Gift Cards', 'Media Center',
          'Investor Relation', 'Jobs', 'Terms Of Use', 'Privacy',
          'Legal Notice', 'Cookie Preferences', 'Corporate Information', 'Contact Us'
        ].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05, color: '#e50914' }}  
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
      <p className='copyright-text'>© All Rights Reserved, Netflix INC.</p>
    </motion.div>
  );
};

export default Footer;
  