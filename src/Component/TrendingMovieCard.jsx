import React from "react";
import MovieDescription from "../Component/MovieDescription";
import ImageCard from "../Component/ImageCard";
import { useSelector } from "react-redux";
export default function TrendingMovieCard() {
  const data = useSelector((state) => state.movie.data);
  return (
    <div className="space-y-4 h-full">
      <h1>Trending</h1>
      <div className="flex h-full w-full flex-nowrap overflow-x-scroll space-x-4 lg:space-x-11">
        {data.map((dt, index) => {
          if (dt.isTrending) {
            return (
              <ImageCard
                isBookmark={dt.isBookmarked}
                Thumbnails={dt.thumbnail.trending}
                title={dt.title}
                key={index}
              >
                <MovieDescription
                  title={dt.title}
                  rating={dt.rating}
                  category={dt.category}
                  year={dt.year}
                  isTrending={true}
                ></MovieDescription>
              </ImageCard>
            );
          }
        })}
      </div>
    </div>
  );
}
