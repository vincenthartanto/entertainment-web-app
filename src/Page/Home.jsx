import React, { useState } from "react";
import NavigationBar from "../Component/NavigationBar";
import SearchComponents from "../Component/SearchComponents";
import Thumbnails from "../assets/thumbnails/112/regular/small.jpg";
import IconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import TrendingMovieCard from "../Component/TrendingMovieCard";
import MovieDescription from "../Component/MovieDescription";
import MovieCard from "../Component/MovieCard";
import FilmList from "../Component/FilmList";
import useWindow from "../Hooks/useWindow";
import PageLayout from "../Layout/PageLayout";
import ListMovieLayout from "../Layout/ListMovieLayout";
import { useSelector } from "react-redux";
export default function Home() {
  const [search, setSearch] = useState();
  const [results, setResults] = useState([]);
  const data = useSelector((state) => state.movie.data);
  function getData(value) {
    let resultData = [];
    data.map((dt) => {
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
        placeholder={"Search for movies or TV series"}
        onChange={(e) => {
          setSearch(e.target.value);
          const response = getData(e.target.value);
          setResults(response);
        }}
      ></SearchComponents>
      {search ? (
        <div>
          <h1>{`Found ${results.length}  results  for '${search}'`}</h1>
          <ListMovieLayout>
            {results.map((dt, index) => {
              console.log(dt.thumbnail);
              return (
                <MovieCard
                  key={index}
                  isBookmark={dt.isBookmark}
                  title={dt.title}
                  category={dt.category}
                  thumbnails={dt.thumbnail}
                  year={dt.year}
                  rating={dt.rating}
                ></MovieCard>
              );
            })}
          </ListMovieLayout>
        </div>
      ) : (
        <>
          <TrendingMovieCard></TrendingMovieCard>
          <FilmList></FilmList>
        </>
      )}
    </PageLayout>
  );
}
