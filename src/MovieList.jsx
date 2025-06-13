import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

function MovieList({
  allMovies,
  favoritesList,
  watchedList,
  setMovies,
  setWatched,
  setFavorites,
}) {
  console.log({ allMovies });
  return (
    <section
      style={{
        flexWrap: "wrap",
        marginTop: "40px",
        width: "75%",
        marginLeft: "12.5%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {allMovies.map((movie) => {
        //still need to add genre and releaseDate
        return (
          <MovieCard
            favoritesList={favoritesList}
            watchedList={watchedList}
            setMovies={setMovies}
            setWatched={setWatched}
            setFavorites={setFavorites}
            movie={movie}
            backdrop={movie.backdrop_path}
            releaseDate={movie.release_date}
            overView={movie.overview}
            id={movie.id}
            key={movie.id}
            img={movie.poster_path}
            rating={movie.vote_average}
            title={movie.original_title}
          />
        );
      })}
    </section>
  );
}

export default MovieList;
