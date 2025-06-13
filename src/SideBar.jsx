import { useState } from "react";
import "./sideBar.css";

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
    <nav>
      <button className="sideButton" onClick={home}>
        Home
      </button>
      <button className="sideButton" onClick={liked}>
        Liked
      </button>
      <button className="sideButton" onClick={watched}>
        Watched
      </button>
    </nav>
  );
};

export default SideBar;
