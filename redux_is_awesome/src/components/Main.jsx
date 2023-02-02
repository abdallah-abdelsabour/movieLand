import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Star from "./Favicon";
import Pagination from "./Pagination";

const Main = () => {
  const parms = useParams();
  const [movies, setMovies] = useState([]);
  console.log(parms);
  const dispatchFavourt = useDispatch();
  const handleFavourt = (movie) => {
    // console.log("id is", id);
    dispatchFavourt({ type: "ADDFAV", payload: movie });
  };

  const fetchMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87"
      )
      .then((result) => {
        setMovies(result.data.results);
        console.log(result.data);
        console.log("movies a</Switch></Switch>re ", movies);
      })
      .catch((error) => {
        console.log("error in api ");
      });
  };
  useEffect(fetchMovie, [parms]);

  return (
    <>
      <Pagination></Pagination>
      <div className="inline-grid  sm:grid-cols-3 xl:grid-cols-5 gap-4 pl-10 mx-4 justify-center mt-10">
        {movies.map((movie) => {
          return <Card movie={movie} handleFavourt={handleFavourt}></Card>;
        })}
      </div>
    </>
  );
};

export default Main;
