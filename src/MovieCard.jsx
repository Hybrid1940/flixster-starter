import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function MovieCard() {
  return (
    <div style={{marginTop:"10px", borderRadius:"5px", width:"19%", border:"solid 2px black"}}>
        <img style={{marginTop:"10px"}} src="src\assets\react.svg"></img>
        <h3 className="movieTitle">Lilo & Stitch</h3>
        <p className="rating">Rating: 7</p>
    </div>
  )
}

export default MovieCard
