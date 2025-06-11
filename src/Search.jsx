import { useState } from 'react'
import './App.css'

const Organization = ({setMovies, clearClick, allMovies}) => {
  //functionality for the search
  const searchClick = async (event) =>{
    event.preventDefault();
    const search = event.target.previousSibling.value;
    const url =  `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    };
    const response = await fetch(url, options);
    const newMovies = await response.json();
    setMovies(newMovies.results);
  }

  const sort = (event) => {
    let sortMovies = [];
    if(event.target.value === "alphabetic"){
     sortMovies = [...allMovies].sort((a,b) => {
        //reimpliment with localeCompare
        if(a.original_title < b.original_title){
          return -1
        }else if(a.original_title > b.original_title){
          return 1;
        }
        return 0
      });
      setMovies(sortMovies);
    }else if(event.target.value === "recent"){
       sortMovies = [...allMovies].sort((a,b) => {
        //reimpliment with localeCompare
        if(a.release_date > b.release_date){
          return -1
        }else if(a.release_date < b.release_date){
          return 1;
        }
        return 0
      });
      setMovies(sortMovies);
    }else if(event.target.value === "votes"){
      sortMovies = [...allMovies].sort((a,b) => {
        //reimpliment with localeCompare
        if(a.vote_average > b.vote_average){
          return -1
        }else if(a.vote_average < b.vote_average){
          return 1;
        }
        return 0
      });
      setMovies(sortMovies);
    }
  }

  function clearClickAnonymous(){
    clearClick(1)
  }

  return (
    <div style={{display:'flex', justifyContent:"center"}} className="Search">
      <form>
        <input type='text'></input>
        <button type='submit' onClick={searchClick}>Search</button>
        <button type='submit' onClick={() => clearClickAnonymous()}>Clear</button>
      </form>
      <select onChange={sort} style={{marginLeft:"10px"}} name='sortOptions' id='sortOptions'>
        <option value="none">Sort</option>
        <option value="alphabetic">A-Z</option>
        <option value="recent">Most Recent</option>
        <option value="votes">votes</option>
      </select>
    </div>
  )
}

export default Organization 
