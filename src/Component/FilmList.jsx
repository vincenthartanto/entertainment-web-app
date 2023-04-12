import React from "react";
import MovieCard from "./MovieCard";
import ListMovieLayout from "../Layout/ListMovieLayout";
import { useSelector } from "react-redux";
export default function FilmList() {
  const data = useSelector((state) => state.movie.data);
  return (
    <div className="space-y-4 ">
      <h2>Recommended for you</h2>
      <ListMovieLayout>
        {data.map((dt, index) => {
          return (
            <MovieCard
              key={index}
              title={dt.title}
              thumbnails={dt.thumbnail.regular}
              year={dt.year}
              category={dt.category}
              rating={dt.rating}
              isBookmark={dt.isBookmarked}
            ></MovieCard>
          );
        })}
      </ListMovieLayout>
    </div>
  );
}
