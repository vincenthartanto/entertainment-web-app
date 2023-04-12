import React, { useState } from "react";
import SearchComponents from "../Component/SearchComponents";
import PageLayout from "../Layout/PageLayout";
import MovieCard from "../Component/MovieCard";
import ListMovieLayout from "../Layout/ListMovieLayout";
import { useSelector } from "react-redux";
export default function TVSeriesPage() {
  const [search, setSearch] = useState();
  const [results, setResults] = useState([]);
  const data = useSelector((state) => state.movie.data);
  function getData(value) {
    let resultData = [];
    let movieData = data.filter((dt) => dt.category === "TV Series");
    movieData.map((dt) => {
      if (dt.title.toLowerCase().match(value.toLowerCase())) {
        resultData.push({
          title: dt.title,
          category: dt.category,
          year: dt.year,
          rating: dt.rating,
          thumbnail: dt.thumbnail.regular,
          isBookmark: dt.isBookmarked,
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
        placeholder={"Search for TV Series"}
      ></SearchComponents>
      <h1>TV Series</h1>
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
                ></MovieCard>
              );
            })}
          </ListMovieLayout>
        </div>
      ) : (
        <ListMovieLayout>
          {data.map((dt, index) => {
            if (dt.category === "TV Series") {
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
            }
          })}
        </ListMovieLayout>
      )}
    </PageLayout>
  );
}
