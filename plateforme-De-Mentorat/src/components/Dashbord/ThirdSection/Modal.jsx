import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="fixed top-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
