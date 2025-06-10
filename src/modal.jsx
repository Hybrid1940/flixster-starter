import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./MovieModal.css"

function MovieModal(props) {
  return (
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
  )
  
}

export default MovieModal
