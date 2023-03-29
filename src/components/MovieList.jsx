import React from "react";
import Image from "../images/image.png";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  const imageControl = (src) => {
    const placeholder = Image;
    if (!src.Poster) {
      return placeholder;
    }
    return src.Poster === "N/A" ? placeholder : src.Poster;
  };

  return (
    <>
      {props.movies && (
        <>
          {props.movies.map((movie, index) => (
            <div key={index} className="image-container">
              <p className="movie-title">
                <a
                  className="movie-title"
                  target="blank"
                  href={`https://www.imdb.com/title/${movie.imdbID}/`}
                >
                  {movie.Title}
                </a>
              </p>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="blank"
              >
                <img
                  className="movie-image"
                  src={imageControl(movie)}
                  alt={movie.Title}
                ></img>
              </a>
              <div
                onClick={() => props.handleFavouritesClick(movie)}
                className="favorite-overlay"
              >
                <FavouriteComponent />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MovieList;
