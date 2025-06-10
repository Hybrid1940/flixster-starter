import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";


function MovieList(allMovies) {
  return (
    <div style={{ flexWrap:"wrap", marginTop:"40px", width:"75%", marginLeft:"12.5%", display:"flex", justifyContent:"space-around"}}>
      {
        allMovies.allMovies.map(({id, original_title, vote_average, poster_path, overview, backdrop_path, release_date}) => {
          //still need to add genre and releaseDate
          return <MovieCard backdrop = {backdrop_path} releaseDate = {release_date} overView = {overview} key={id} img = {poster_path} rating = {vote_average} title = {original_title}/>
        })
      }
    </div>
  )
}

export default MovieList
