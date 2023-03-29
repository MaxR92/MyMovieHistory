import React, { useState, useEffect } from "react";
import "./App.scss";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import { useHorizontalScroll } from "./components/SideScroll";
import { useHorizontalScroll2 } from "./components/SideScroll2";
import Modal from "./components/Modal";
import PlaceholderList from "./components/PlaceholderList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites !== null) {
      console.log(34, movieFavourites);
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    console.log(favourites);
    if (favourites) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const scrollRef = useHorizontalScroll();
  const scrollRef2 = useHorizontalScroll2();

  return (
    <div className="movie-app">
      <div className="Movie-Search">
        <MovieListHeading heading="My Movie History" />
        <div className="ModalCasing">
          <button className="OpenButton" onClick={() => setIsOpen(true)}>
            Need Help?
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
        <SearchBox setMovies={setMovies} searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div ref={scrollRef} className="Movie-Preview">
        {movies.length == 0  
        ? [...new Array(6)].map((_item, index) => <PlaceholderList key={index} />)
        : <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
          /> }
      </div>
      <div className="Personal-Favorites">
        <MovieListHeading heading="Your Favorites" />
      </div>
      <div ref={scrollRef2} className="Movie-Favorites">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
