import React, { useState } from "react";
import useImage from "../Hooks/useImage";
import IconPlay from "../../public//assets/icon-play.svg";
import { MovieSliceAction } from "../Store/MovieSlice";
import { useDispatch } from "react-redux";
import useToggle from "../Hooks/useToggle";
import YoutubeModal from "./YoutubeModal";
export default function ImageCard({
  children,
  Thumbnails,
  isBookmark,
  title,
  trailerLink,
}) {
  const img = useImage(Thumbnails.small, Thumbnails.small, Thumbnails.large);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const openVideo = useToggle(false);
  const handleHover = () => {
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="relative shrink-0 w-[90%] h-[12rem] bg-cover bg-no-repeat rounded-xl  flex flex-col justify-between lg:w-[40%] "
    >
      {hovered && (
        <div
          onClick={openVideo.changeToggle}
          className="bg-transparent block absolute h-full w-full  hover:bg-black hover:bg-opacity-50 z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full bg-opacity-30 paragraph-m p-2 flex space-x-2 items-center">
            <img src={IconPlay}></img>
            <p>Play</p>
          </div>
        </div>
      )}
      <div className=" my-2 relative  w-12 ml-auto z-10">
        <div
          onClick={() => {
            if (isBookmark) {
              dispatch(MovieSliceAction.deleteBookmark(title));
            } else {
              dispatch(MovieSliceAction.addBookmark(title));
            }
          }}
          className="bg-black bg-opacity-50 w-8 h-8 rounded-full grid place-items-center hover:bg-white hover:stroke-black stroke-white"
        >
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              className={` hover:fill-none ${
                isBookmark ? "fill-white" : "fill-none"
              } `}
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      {openVideo.isToggle && (
        <YoutubeModal
          changeToggle={openVideo.changeToggle}
          youtubeLink={trailerLink}
        ></YoutubeModal>
      )}
      {children}
    </div>
  );
}
