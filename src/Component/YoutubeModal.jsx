import React from "react";
import ReactDOM from "react-dom";
export default function YoutubeModal({ changeToggle, youtubeLink }) {
  console.log("this is youtube" + youtubeLink);
  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        e.stopPropagation();
        changeToggle();
      }}
      className="fixed h-screen w-screen bg-black bg-opacity-50 z-50 grid place-items-center"
    >
      <iframe
        allow="autoplay"
        className="w-[80%] h-[50%]"
        src={youtubeLink + "?autoplay=1"}
      ></iframe>
    </div>,
    document.getElementById("modal-video")
  );
}
