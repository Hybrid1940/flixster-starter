import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function MovieCard(props) {
  var image = `https://image.tmdb.org/t/p/original/${props.img}`;
  var backDropImage = `https://image.tmdb.org/t/p/original/${props.backdrop}`;
  var trailerStarter = "https://www.youtube.com/embed/";
  const [trailer, setTrailer] = useState(trailerStarter);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState();
  const [likeColor, setLikeColor] = useState("white");
  const [watchColor, setWatchColor] = useState("white");

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    //get additional details
    const url = `https://api.themoviedb.org/3/movie/${props.id}?language=en-US`;
    const videoUrl = `https://api.themoviedb.org/3/movie/${props.id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzJmMGNiOWYwMDE4NTM3YWUyNjI0NTJjMzNjMjZiMiIsIm5iZiI6MTc0OTQ5NjA5Ni44NzY5OTk5LCJzdWIiOiI2ODQ3MzEyMDk1YTFjNzdkZWI5MTAzOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Gd3be5eU2kGRjWC48uOQS2Ua4qRuEiO_X774qop1tDQ",
      },
    };
    const newFetch = await fetch(url, options);
    const newDetails = await newFetch.json();
    setMovieDetails(newDetails);

    const newVideosFetch = await fetch(videoUrl, options);
    const videos = await newVideosFetch.json();
    for (let i = 0; i < videos.results.length; i++) {
      if (videos.results[i].name.includes("Official Trailer")) {
        setTrailer(trailerStarter + videos.results[i].key);

        break;
      }
    }
  };
  //Modal Anonymous funcitons
  const turnModalOff = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  const turnModalOn = () => {
    loadDetails();
    setShowModal(true);
  };

  //Liking functionality
  const likeFunction = (event) => {
    event.stopPropagation();
    if (likeColor === "white") {
      setLikeColor("red");
    } else {
      setLikeColor("white");
    }
    if (likeColor === "white") {
      props.setFavorites([...props.favoritesList, props.movie]);
    } else {
      props.setFavorites(
        props.favoritesList.filter((movie) => movie !== props.movie)
      );
    }
  };

  //watched functionality
  const watchFunction = (event) => {
    event.stopPropagation();
    if (watchColor === "white") {
      setWatchColor("red");
    } else {
      setWatchColor("white");
    }
    if (watchColor === "white") {
      props.setWatched([...props.watchedList, props.movie]);
    } else {
      let index = props.watchedList.findIndex((obj) => obj.id === props.id);
      props.setWatched(
        props.watchedList.filter((movie) => movie !== props.movie)
      );
    }
  };
  return (
    <div
      onClick={turnModalOn}
      style={{
        marginTop: "10px",
        borderRadius: "5px",
        width: "19%",
        border: "solid 2px black",
      }}
    >
      <img
        alt="Movie Poster"
        style={{ marginTop: "10px", width: "60%" }}
        src={image}
      ></img>
      <h3 style={{ fontSize: "2vw" }} className="movieTitle">
        {props.title}
      </h3>
      <p className="rating">Rating: {props.rating}</p>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <button
          className="likeButton"
          onClick={likeFunction}
          style={{ marginRight: "10px", color: likeColor }}
        >
          &#x2665;
        </button>
        <button
          className="watchButton"
          onClick={watchFunction}
          style={{ marginRight: "10px", color: watchColor }}
        >
          &#10004;
        </button>
      </div>

      {showModal && (
        <div id="playListModal" className="modal">
          <div className="modal-content" style={{ width: "50%" }}>
            <h2>{props.title}</h2>
            <img
              alt="movie Background Image"
              width={"400px"}
              src={backDropImage}
            ></img>
            <h3>Release Date: {props.releaseDate}</h3>
            <p>Overview: {props.overView}</p>
            <h3>Runtime in minutes: {movieDetails.runtime}</h3>
            <p>Genres: </p>
            {movieDetails.genres.map((name) => {
              return <p>{name.name}</p>;
            })}
            <iframe width="420" height="315" src={trailer}></iframe>
            <br></br>
            <button onClick={turnModalOff}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
