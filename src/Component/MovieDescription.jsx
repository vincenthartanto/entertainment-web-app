import React from "react";
import IconCategoryMovie from "../assets/icon-category-movie.svg";
export default function MovieDescription({
  year,
  category,
  rating,
  title,
  isTrending = false,
}) {
  return (
    <div className={`${isTrending ? "p-4" : ""}`}>
      <div className="paragraph-m flex items-center space-x-2 opacity-70">
        <p className="">{year}</p>
        <div className="rounded-full  bg-white w-[0.3rem] h-[0.3rem] "></div>
        <img src={IconCategoryMovie}></img>
        <p>{category}</p>
        <div className="rounded-full  bg-white w-[0.3rem] h-[0.3rem] "></div>
        <p>{rating}</p>
      </div>
      <p className="paragraph-m">{title}</p>
    </div>
  );
}
