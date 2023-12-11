import React, { useState } from 'react'
import useFetch from '../hook/useFetch';

const Main = () => {
    //const [movies, setMovies] = useState([]);
    const [movie_url, setMovie_ulr]=useState("http://localhost:8000/movies/");
    const {data:movies,loading,error}=useFetch(movie_url);

    console.log(movies);

    // const fetchMovies = useCallback( 
    //   async() => {
    //     const response = await fetch(movie_url);
    //     const data = await response.json();
    //     setMovies(data);
  
    //   },[movie_url])
    
    // useEffect(() =>{
    //     fetchMovies();

    // },[fetchMovies])


  return (
    <div className='main'>
        <div className='filter-btns'>
          <button onClick={()=> setMovie_ulr("http://localhost:8000/movies/")}>All Movies</button>
          <button onClick={()=>setMovie_ulr("http://localhost:8000/movies?best_rated=true")}>Best Rated</button>
        </div>
        {loading && <h1>Loading...</h1>}
        {error && <h2>{error}</h2> }
        {movies && movies.map(movie  =>
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
