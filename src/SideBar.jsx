import { useState } from "react";
import "./App.css";

const SideBar = ({
  setMovies,
  likedList,
  watchedList,
  OGMovies,
  setViewLoadMovies,
}) => {
  const home = () => {
    setMovies(OGMovies);
    setViewLoadMovies(true);
  };
  const liked = () => {
    setMovies(likedList);
    setViewLoadMovies(false);
  };
  const watched = () => {
    setMovies(watchedList);
    setViewLoadMovies(false);
  };
  return (
    <div
      style={{
        marginLeft: "6%",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "8%",
      }}
    >
      <button onClick={home} style={{ marginTop: "20px", fontSize: "1vw" }}>
        Home
      </button>
      <button onClick={liked} style={{ marginTop: "20px", fontSize: "1vw" }}>
        Liked
      </button>
      <button onClick={watched} style={{ marginTop: "20px", fontSize: "1vw" }}>
        Watched
      </button>
    </div>
  );
};

export default SideBar;
