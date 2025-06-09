import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";


function MovieList() {
  return (
    <div style={{ flexWrap:"wrap", marginTop:"40px", width:"75%", marginLeft:"12.5%", display:"flex", justifyContent:"space-around"}}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        
    </div>
  )
}

export default MovieList
