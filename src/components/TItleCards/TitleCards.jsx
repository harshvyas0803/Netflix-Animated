import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_API_KEY'  
      }
    })
    .then(response => response.json())
    .then(data => setApiData(data.results))
    .catch(err => console.error(err));

    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY * 
      200;  
    };

    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);

    return () => currentRef.removeEventListener('wheel', handleWheel);
  }, [category]);

  return (
    <motion.div
      className='title-cards'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{title || "Popular on Netflix"}</h2>
      <motion.div
        className='card-list'
        ref={cardsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TitleCards;
