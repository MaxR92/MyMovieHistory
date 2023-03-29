import React from "react";
import PlaceholderImage from "../images/Placeholder.png";

const PlaceholderList = () => {
  return (
    <>
        <div className="image-container">
          <p className="movie-title"></p>
          
            <img
              className="movie-image"
              src={PlaceholderImage}
              alt="Gray Placeholder"
            ></img>
        </div>
    </>
  );
};

export default PlaceholderList;