import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="ModalHeadingText">Dialog</h5>
          </div>
          <button className="closeButton" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="ModalContent">
            Are you sure you want to delete the item?
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;