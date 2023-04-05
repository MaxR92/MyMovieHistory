import React from "react";
import { Context } from "../App";
import { useContext } from "react";

const Modal = (props) => {
  const [favourites, setFavourites] = useContext(Context);

  const ImportFunction = () => {
    const userData = navigator.clipboard.readText();
    const DataResult = userData.then((text) => {
      localStorage.setItem(
        "react-movie-app-favourites",
        JSON.parse(JSON.stringify(text))
      );
    });
    window.location.reload(false);
  };

  const LoadFavorites = () => {
    const Favorites = localStorage.getItem("My-Movie-History-Data");
    localStorage.setItem("react-movie-app-favourites", Favorites);
    window.location.reload(false);
  };

  const removeFavorites = () => {
    localStorage.removeItem("My-Movie-History-Data");
    localStorage.removeItem("react-movie-app-favourites");
    window.location.reload(false);
  };

  return (
    <>
      <div className="darkBG" onClick={() => props.setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="ModalHeadingText">My Movie History</h5>
          </div>
          <button
            className="closeButton"
            onClick={() => props.setIsOpen(false)}
          >
            X
          </button>
          <div className="ModalContent">
            Welcome to <h2>My Movie History</h2> <br></br>
            On this website you are able to save your own Movie History. <br />{" "}
            <br />
            <h3>Get Started</h3>
            To get started, you can simply use the search field in the top right
            corner of this website. <br />
            As you're typing, the website starts to search for your requested
            movie in an open movie database. <br />
            The top field will show you the result of your search, while the
            bottom field will contain movies that you added to your favorites.{" "}
            <br /> <br />
            <h3>Features and things you can do</h3>
            To add movies or series to your favorites, you have to search for a
            movie and click on the button "add to favorites" below the displayed
            movie poster. <br />
            If you added a wrong movie or you just want to remove a movie out of
            your history, click the "remove from favorites" button in your
            favorites below the movie poster that you wish to delete. <br />
            You want to know more about a movie or series? Click on the movie
            poster or its title above and you will be redirected to the{" "}
            <i>
              <a target="blank" href="https://imdb.com">
                Internet Movie Database
              </a>{" "}
            </i>
            which is the largest collection of movies and series you can find on
            the Internet. <br /> <br />
            <h3>Export Favorites</h3>
            You want to share your favorites with others? Click on the{" "}
            <i>Export Favorites</i> button and a copy of your data will be sent
            to your clipboard. <br />
            <h3>Import Favorites</h3>
            To import the favoritelist from someone else you can copy the
            exported data. Copy the Content to your Clipboard and click on the{" "}
            <i>Import Favorites</i> button.
            <h3>Save Favorites</h3>
            Sometimes you want to scroll through someone elses favorites but
            dont want to loose your own. Click the <i>Save Favorites</i> button
            to make sure your favorites don't get lost.
            <h3>Load Favorites</h3>
            With this button you can load your saved favorites. Click the{" "}
            <i>Load Favorites</i> button and your saved favorites will show up.
            <h3>Clear LocalStorage</h3>
            If you want to clear all your data from this website, click the{" "}
            <i>Clear LocalStorage</i> button and your saved favorites, as well
            as the current favoritelist will be deleted.
          </div>
          <div className="buttonArea">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  localStorage.getItem("react-movie-app-favourites")
                );
                alert("Copied to your Clipboard!");
              }}
            >
              Export Favorites
            </button>
            <button onClick={ImportFunction}>Import Favorites</button>
            <button
              onClick={() => {
                localStorage.setItem(
                  "My-Movie-History-Data",
                  JSON.stringify(favourites)
                );
                alert("Save successful!");
              }}
            >
              Save Favorites
            </button>
            <button onClick={LoadFavorites}>Load Favorites</button>
            <button onClick={removeFavorites}>Clear LocalStorage</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
