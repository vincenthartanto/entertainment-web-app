import React, { useState } from "react";
import Thumbnails from "../assets/thumbnails/112/regular/small.jpg";
import IconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import MovieDescription from "./MovieDescription";
import useImage from "../Hooks/useImage";
import IconPlay from "../assets/icon-play.svg";
import { useDispatch } from "react-redux";
import { MovieSliceAction } from "../Store/MovieSlice";
export default function MovieCard({
  title,
  year,
  rating,
  category,
  thumbnails,
  isBookmark,
}) {
  const dispatch = useDispatch();
  const img = useImage(thumbnails.small, thumbnails.medium, thumbnails.large);
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="relative h-[10rem] rounded-xl bg-no-repeat bg-cover lg:h-[10.8rem] lg:w-[17.5rem]"
        style={{ backgroundImage: `url("${img}")` }}
      >
        {hovered && (
          <div className="absolute h-full w-full bg-black bg-opacity-50 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full bg-opacity-30 paragraph-m p-2 flex space-x-2 items-center">
              <img src={IconPlay}></img>
              <p>Play</p>
            </div>
          </div>
        )}

        <div className=" my-2 relative  w-8 ml-auto z-10">
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
      </div>

      <MovieDescription
        title={title}
        year={year}
        rating={rating}
        category={category}
      ></MovieDescription>
    </div>
  );
}
