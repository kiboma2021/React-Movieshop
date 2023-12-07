import React, { useEffect, useState } from 'react'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie_url="http://localhost:8000/movies/";

    console.log(movies);

    
    useEffect(() =>{
        fetch(movie_url)
        .then(response => response.json())
        .then(data => setMovies(data))

    },[])


  return (
    <div className='main'>
        {movies.map(movie  =>
        <div className='card'>
            <h1>{movie.movie_name} <span className={movie.best_rated?"best_rated":""} >{movie.best_rated?"*****":"" } </span>  </h1>
            <p>{movie.description}</p>
            <p>Realesed on: {movie.year_released} </p>
        </div>
        )}

      
    </div>
  )
}

export default Main
