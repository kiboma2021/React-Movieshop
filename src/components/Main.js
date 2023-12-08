import React, { useCallback, useEffect, useState } from 'react'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [movie_url, setMovie_ulr]=useState("http://localhost:8000/movies/");

    console.log(movies);

    const fetchMovies = useCallback( 
      async() => {
        const response = await fetch(movie_url);
        const data = await response.json();
        setMovies(data);
  
      },[movie_url])
    
    useEffect(() =>{
        fetchMovies();

    },[fetchMovies])


  return (
    <div className='main'>
        <div className='filter-btns'>
          <button onClick={()=> setMovie_ulr("http://localhost:8000/movies/")}>All Movies</button>
          <button onClick={()=>setMovie_ulr("http://localhost:8000/movies?best_rated=true")}>Best Rated</button>
        </div>
        {movies.map(movie  =>
        <div className='card' key={movie.id}>
            <h1>{movie.movie_name} <span className={movie.best_rated?"best_rated":""} >{movie.best_rated?"*****":"" } </span>  </h1>
            <p>{movie.description}</p>
            <p>Realesed on: {movie.year_released} </p>
        </div>
        )}

      
    </div>
  )
}

export default Main
