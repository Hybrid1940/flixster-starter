import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Search from "./Search";
import Organization from "./Search";
import { useEffect } from "react";
import SideBar from "./SideBar";

const App = () => {
  /*initial states of movie list and pageNum that 
  we are loading from for new Movies
  */
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState(null);
  const [OGMovies, setOGMovies] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  const [viewLoadMovies, setViewLoadMovies] = useState(true);
  /*loads movies based conditionally
   based on if they were previously loaded and will
    append new movies on the end of the current list*/
  useEffect(() => {
    const loadNew = async () => {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const response = await fetch(url, options);
      const newMovies = await response.json();
      //situational appending
      if (movies === null) {
        setOGMovies(newMovies.results);
        setMovies(newMovies.results);
      } else {
        setMovies([...movies, ...newMovies.results]);
      }
    };
    loadNew();
  }, [pageNum]);

  //handles submission from "Load More"
  const handleClick = (newNum) => {
    if (newNum === undefined) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(newNum);
    }
  };
  if (movies === null) {
    return;
  } else {
    return (
      <div className="App">
        <header>
          <h1>Flixter!!!</h1>
          <Organization
            allMovies={movies}
            clearClick={handleClick}
            setMovies={setMovies}
          />
        </header>
        <main>
          <SideBar
            setViewLoadMovies={setViewLoadMovies}
            likedList={favorites}
            watchedList={watched}
            setMovies={setMovies}
            OGMovies={OGMovies}
          />
          <div className="movieListContainer">
            <MovieList
              favoritesList={favorites}
              watchedList={watched}
              setMovies={setMovies}
              setWatched={setWatched}
              setFavorites={setFavorites}
              allMovies={movies}
            />
            {viewLoadMovies && (
              <button className="loadMore" onClick={() => handleClick()}>
                Load More Movies
              </button>
            )}
          </div>
        </main>
        <footer>
          <h3>Made by Mahesh Bachu</h3>
        </footer>
      </div>
    );
  }
};

export default App;
