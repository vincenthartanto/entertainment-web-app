import React, { useState } from "react";
import SearchComponents from "../Component/SearchComponents";
import PageLayout from "../Layout/PageLayout";
import MovieCard from "../Component/MovieCard";
import ListMovieLayout from "../Layout/ListMovieLayout";
import { useSelector } from "react-redux";
export default function BookmarkPage() {
  const [search, setSearch] = useState();
  const [results, setResults] = useState([]);
  const data = useSelector((state) => state.movie.data);
  function getData(value) {
    let resultData = [];
    let movieData = data.filter((dt) => dt.isBookmarked === true);
    movieData.map((dt) => {
      if (dt.title.toLowerCase().match(value.toLowerCase())) {
        resultData.push({
          title: dt.title,
          category: dt.category,
          year: dt.year,
          rating: dt.rating,
          thumbnail: dt.thumbnail.regular,
          isBookmark: dt.isBookmarked,
          trailerLink: dt.trailerLink,
        });
      }
    });
    return resultData;
  }
  return (
    <PageLayout>
      <SearchComponents
        onChange={(e) => {
          setSearch(e.target.value);
          const response = getData(e.target.value);
          console.log(response);
          setResults(response);
        }}
        placeholder={"Search for bookmarked shows"}
      ></SearchComponents>
      <h1>Bookmarked Movies</h1>
      {search ? (
        <div>
          <h1>{`Found ${results.length}  results  for '${search}'`}</h1>
          <ListMovieLayout>
            {results.map((dt, index) => {
              return (
                <MovieCard
                  key={index}
                  title={dt.title}
                  category={dt.category}
                  thumbnails={dt.thumbnail}
                  year={dt.year}
                  rating={dt.rating}
                  isBookmark={dt.isBookmark}
                  trailerLink={dt.trailerLink}
                ></MovieCard>
              );
            })}
          </ListMovieLayout>
        </div>
      ) : (
        <div>
          <ListMovieLayout>
            {data.map((dt, index) => {
              if (dt.isBookmarked && dt.category === "Movie") {
                return (
                  <MovieCard
                    key={index}
                    title={dt.title}
                    thumbnails={dt.thumbnail.regular}
                    year={dt.year}
                    category={dt.category}
                    rating={dt.rating}
                    isBookmark={dt.isBookmarked}
                    trailerLink={dt.trailerLink}
                  ></MovieCard>
                );
              }
            })}
          </ListMovieLayout>
          <h1>Bookmarked TV Series</h1>
          <ListMovieLayout>
            {data.map((dt, index) => {
              if (dt.isBookmarked && dt.category === "TV Series") {
                return (
                  <MovieCard
                    key={index}
                    title={dt.title}
                    thumbnails={dt.thumbnail.regular}
                    year={dt.year}
                    category={dt.category}
                    rating={dt.rating}
                    isBookmark={dt.isBookmarked}
                    trailerLink={dt.trailerLink}
                  ></MovieCard>
                );
              }
            })}
          </ListMovieLayout>
        </div>
      )}
    </PageLayout>
  );
}
