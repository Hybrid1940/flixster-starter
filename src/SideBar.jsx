import { useState } from "react";
import "./App.css";

const SideBar = ({ setMovies, likedList, watchedList, OGMovies }) => {
  const home = () => {
    setMovies(OGMovies);
  };
  const liked = () => {
    setMovies(likedList);
  };
  const watched = () => {
    setMovies(watchedList);
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
      <button onClick={home} style={{ marginTop: "20px" }}>
        Home
      </button>
      <button onClick={liked} style={{ marginTop: "20px" }}>
        Liked
      </button>
      <button onClick={watched} style={{ marginTop: "20px" }} href="">
        Watched
      </button>
    </div>
  );
};

export default SideBar;
