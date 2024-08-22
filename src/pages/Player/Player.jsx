import React, { useEffect, useState } from 'react'
import './Player.css/'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {


  const navigate =useNavigate(); 
  const {id} = useParams();
  

  const [apiData,setApiData]=useState({

name: "",
key : "",
published_at: "",
typeof: ""
  })
  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY5OWYyYzc1YTA4NDM4N2JmNmEzNWQ5MzViMjc0MSIsIm5iZiI6MTcyNDE1ODAxNC42NzMwMTcsInN1YiI6IjY2YzQ4ZjlhYWJiYWQwMDFiY2E1OGQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6v8lJRnKTKlh2PUk0-nF5IOS2dntdC-Vrb0UrlSkNH0'
    }
  };
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])




  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />

<iframe width= '90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>

<div className="player-info">
  <p>{apiData.published_at.slice(0,10)}</p>
  <p>{apiData.name}</p>
  <p>{apiData.type}</p>

</div>






    </div>
  )
}

export default Player