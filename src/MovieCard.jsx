import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./MovieModal.css"

function MovieCard(props) {
  var image = `https://image.tmdb.org/t/p/original/${props.img}`;
  return (
    <div  style={{marginTop:"10px", borderRadius:"5px", width:"19%", border:"solid 2px black"}}>
        <img width={"50px"} style={{marginTop:"10px"}} src={image}></img>
        <h3 className="movieTitle">{props.title}</h3>
        <p className="rating">Rating: {props.rating}</p>

      { true && (
        <div id="playListModal" className="modal">
            <div className="modal-content" style={{boxShadow: "10px", width: "50%"}}>
                <h2>Title</h2>
                <img src=""></img>
                <h3>Release Date</h3>
                <h3>Genres</h3>
                <video>hey</video>
                <button>Close</button>
            </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard
