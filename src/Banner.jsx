import React, { useState , useEffect } from 'react';
import axios from "./axios.jsx";
import requests from './requests.jsx';
import "./Banner.css";

function Banner(props) {

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovies(
        // console.log(request.data.results);
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);
      return request;
    }
    fetchData();
  }, []);

  //console.log(movies);
  console.log(movie?.overview)
  function truncate(str, max) {
    return str?.length > max ? str.substr(0, max-1) + '…' : str;
  }

  return(
    <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>

      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button className="banner_button">PLAY </button>
          <button className="banner_button">MY LIST </button>
        </div>

        <h1 className = "banner_description">
             {truncate(movie?.overview, 150)}
        </h1>

        </div>

        <div className="banner--fadeBottom" />
    </header>
);
}

export default Banner;
