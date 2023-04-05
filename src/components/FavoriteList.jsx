import React from "react";
import Image from "../images/image.png";
import { useContext } from "react";
import { Context } from "../App";

const FavoriteList = (props) => {

  const [favourites, setFavourites] = useContext(Context);

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
          {favourites.map((movie, index) => (
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
              {movie.imdbID === "" ? <div className="Spacer"></div> :
              <div
                onClick={() => props.handleFavouritesClick(movie)}
                className="favorite-overlay"
              >
                <FavouriteComponent /> 
              </div> }
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default FavoriteList;
