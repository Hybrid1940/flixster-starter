import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Search from './Search'
import Organization from './Search'
import { useEffect } from 'react'
import MovieModal from './modal'



const App = () => {
  /*initial states of movie list and pageNum that 
  we are loading from for new Movies
  */
  const [pageNum, setPageNum] =  useState(1);
  const [movies, setMovies] =  useState(null);
  /*loads movies based conditionally
   based on if they were previously loaded and will
    append new movies on the end of the current list*/
  useEffect( () => {
    const loadNew = async() =>{

      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const response = await fetch(url, options)
      const newMovies = await response.json();
      //situational appending
      if(movies===null){
        setMovies(newMovies.results);
      }else {
        setMovies([...movies, ...newMovies.results]);
      }
    }
    loadNew();
  }, [pageNum]);  
  //handles submission from "Load More"
  const handleClick = (newNum) =>{
    if(newNum===undefined){
      setPageNum(pageNum+1);
    }else{
      setPageNum(newNum);
    }
  }

  if(movies===null){
    return;
  }else{
    return (
      <div className="App">
        <MovieModal />
        <header>
          <h1>Flixter!!!</h1>
        </header>
        <main>
          <Organization allMovies = {movies} clearClick = {handleClick} setMovies = {setMovies}/>
          <MovieList allMovies = {movies} setPageNum = {setPageNum}/>
          <button style={{marginTop:"30px", marginBottom:"30px"}} onClick={() =>handleClick()}>Load More Movies</button>
        </main>
      </div>
    )
  }
}

export default App
