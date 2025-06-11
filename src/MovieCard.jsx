import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./MovieModal.css"
import { useState } from 'react'

function MovieCard(props) {
  var image = `https://image.tmdb.org/t/p/original/${props.img}`;
  var backDropImage = `https://image.tmdb.org/t/p/original/${props.backdrop}`;
  const [showModal, setShowModal] =  useState(false);

  const turnModalOff = (event) => {
    event.stopPropagation();
    setShowModal(false);
    console.log(showModal);
  }

  const turnModalOn = () => {
    setShowModal(true);
    console.log(showModal);
  }

  return (
    <div onClick={turnModalOn} style={{marginTop:"10px", borderRadius:"5px", width:"19%", border:"solid 2px black"}}>
        <img width={"50px"} style={{marginTop:"10px"}} src={image}></img>
        <h3 className="movieTitle">{props.title}</h3>
        <p className="rating">Rating: {props.rating}</p>

      { showModal && (
        <div id="playListModal" className="modal">
            <div className="modal-content" style={{ width: "50%"}}>
                <h2>{props.title}</h2>
                <img width={"400px"} src={backDropImage}></img>
                <h3>Release Date</h3>
                <h3>Genres</h3>
                <video>hey</video>
                <button onClick={turnModalOff}>Close</button>
            </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard
