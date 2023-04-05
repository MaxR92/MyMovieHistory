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
import Top10 from "./images/Top10.png";
import FavoriteList from "./components/FavoriteList";

export const Context = React.createContext();

const App = () => {
  const [movies, setMovies] = useState([
    {
      Poster: `${Top10}`,
      Title: "Top 10 of all time",
      Type: "movie",
      Year: "2023",
      imdbID: "",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      Title: "The Shawshank Redemption",
      Type: "movie",
      Year: "1994",
      imdbID: "tt0111161",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Title: "The Godfather",
      Type: "movie",
      Year: "1972",
      imdbID: "tt0068646",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Title: "The Dark Knight",
      Type: "movie",
      Year: "2008",
      imdbID: "tt0468569",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Title: "The Godfather Part Two",
      Type: "movie",
      Year: "1974",
      imdbID: "tt0071562",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      Title: "12 Angry Men",
      Type: "movie",
      Year: "1957",
      imdbID: "tt0050083",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      Title: "Schindler's List",
      Type: "movie",
      Year: "1993",
      imdbID: "tt0108052",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Title: "The Lord of the Rings: The Return of the King",
      Type: "movie",
      Year: "2003",
      imdbID: "tt0167260",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Title: "Pulp Fiction",
      Type: "movie",
      Year: "1994",
      imdbID: "tt0110912",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Type: "movie",
      Year: "2001",
      imdbID: "tt0120737",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      Title: "The Good, the Bad and the Ugly",
      Type: "movie",
      Year: "1966",
      imdbID: "tt0060196",
    },
  ]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [dataIsReady, setDataIsReady] = useState(false);

  const newData = () => {
    if (dataIsReady === true) {
      setFavourites(favourites);
      setDataIsReady(false);
    }
  };

  const getMovieRequest = async (searchValue) => {
    if (isReady) {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
      setIsReady(false);
      setTimeout(() => {
        setIsReady(true);
      }, 20);
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
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    console.log(items, "test");
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
    <Context.Provider value={[favourites, setFavourites]}>
      <div className="movie-app">
        <div className="Movie-Search">
          <MovieListHeading heading="My Movie History" />
          <div className="ModalCasing">
            <button className="OpenButton" onClick={() => setIsOpen(true)}>
              Need Help?
            </button>
            {isOpen && (
              <Modal setIsOpen={setIsOpen} setFavourites={setFavourites} />
            )}
          </div>
          <SearchBox
            setMovies={setMovies}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div ref={scrollRef} className="Movie-Preview">
          {movies.length == 0 ? (
            [...new Array(6)].map((_item, index) => (
              <PlaceholderList key={index} />
            ))
          ) : (
            <MovieList
              movies={movies}
              handleFavouritesClick={addFavouriteMovie}
              favouriteComponent={AddFavourites}
            />
          )}
        </div>
        <div className="Personal-Favorites">
          <MovieListHeading heading="Your Favorites" />
        </div>
        <div ref={scrollRef2} className="Movie-Favorites">
          <FavoriteList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
