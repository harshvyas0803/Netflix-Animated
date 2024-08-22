 // Home.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../../public/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TItleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      {/* Animate Navbar */}
      <Navbar />

      {/* Animate Hero Background Image */}
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={hero_banner} alt="" className='banner-img' />

        <motion.div
          className="hero-caption"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y:  -180 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>

          <div className="hero-btns">
            <motion.button
              className='btn'
              initial={{ opacity: 0, scale: 0.9}}
              animate={{ opacity: 1, scale: 1,x:-1  }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <img src={play_icon} alt='' /> Play
            </motion.button>

            <motion.button
              className='btn dark-btn'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <img src={info_icon} alt='' /> More info
            </motion.button>
          </div>
        </motion.div>

        <TitleCards />
      </motion.div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for you"} category={"now_playing"} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
