import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="ModalHeadingText">My Movie History</h5>
          </div>
          <button className="closeButton" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="ModalContent">
            Welcome to <h2>My Movie History</h2> <br></br>
            On this website you are able to save your own Movie History. <br /> <br />
            <h3>Get Started</h3> 
            To get started, you can simply use the search field in the top right of this website. <br />
            As your typing , the website starts to search for your requested movie in an open movie database. <br />
            The top field will show you the result of your search, while the bottom field will contain movies, that you added to your favorites. <br /> <br />
            <h3>Features and things you can do</h3>
            To add movies or series to your favorites, you have to search for a movie and click on the button "add to favorites" below the displayed movie poster. <br />
            If you added a wrong movie or you just want to remove a movie out of your history, click the "remove from favorites" button in your favorites, below the not wanted movie poster. <br />
            You want to know more about a movie or series? Click on the movie poster or the movie title above and you will be redirected to the <i><a target="blank" href="https://imdb.com">Internet Movie Database</a></i>, 
            which is the biggest collection of movies and series you can find on the internet.
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;