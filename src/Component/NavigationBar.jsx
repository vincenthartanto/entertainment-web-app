import React from "react";
import MovieLogo from "../../public//assets/logo.svg";
import HomeIcon from "./Icon/HomeIcon";
import MovieIcon from "./Icon/MovieIcon";
import TVSeriesIcon from "./Icon/TVSeriesIcon";
import BookmarkIcon from "./Icon/BookmarkIcon";
import ImageAvatar from "../../public/assets/image-avatar.png";
import useToggle from "../Hooks/useToggle";
export default function NavigationBar() {
  const homeButton = useToggle(true);
  const movieButton = useToggle(false);
  const TVButton = useToggle(false);
  const bookmarkButton = useToggle(false);
  return (
    <nav>
      <img src={MovieLogo}></img>
      <div className="flex space-x-4 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-8 ">
        <HomeIcon
          handleOnClick={() => {
            homeButton.changeToggleTrue();
            movieButton.changeToggleFalse();
            TVButton.changeToggleFalse();
            bookmarkButton.changeToggleFalse();
            console.log(homeButton.isToggle);
          }}
          isToggle={homeButton.isToggle}
        ></HomeIcon>
        <MovieIcon
          handleOnClick={() => {
            homeButton.changeToggleFalse();
            movieButton.changeToggleTrue();
            TVButton.changeToggleFalse();
            bookmarkButton.changeToggleFalse();
          }}
          isToggle={movieButton.isToggle}
        ></MovieIcon>
        <TVSeriesIcon
          handleOnClick={() => {
            homeButton.changeToggleFalse();
            movieButton.changeToggleFalse();
            TVButton.changeToggleTrue();
            bookmarkButton.changeToggleFalse();
          }}
          isToggle={TVButton.isToggle}
        ></TVSeriesIcon>
        <BookmarkIcon
          handleOnClick={() => {
            homeButton.changeToggleFalse();
            movieButton.changeToggleFalse();
            TVButton.changeToggleFalse();
            bookmarkButton.changeToggleTrue();
          }}
          isToggle={bookmarkButton.isToggle}
        ></BookmarkIcon>
      </div>
      <img
        className="border-2 border-white rounded-full w-[10%] lg:w-[60%]"
        src={ImageAvatar}
      ></img>
    </nav>
  );
}
