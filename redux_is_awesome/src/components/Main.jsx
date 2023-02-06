import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";
import Pagination from "./Pagination";
import Example from "./Select";
import Select from "./Select";

const Main = () => {
  const favMovies = useSelector((state) => state.movies);
  const isCardInFavourt = (list, movie) => {
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };

  const { pageNumber } = useParams();
  const [movies, setMovies] = useState([]);
  console.log(pageNumber);
  const dispatchFavourt = useDispatch();
  const handleFavourt = (movie) => {
    // console.log("id is", id);
    dispatchFavourt({ type: "ADDFAV", payload: movie });
  };

  const fetchMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${pageNumber}`
      )
      .then((result) => {
        setMovies(result.data.results);
        console.log(result.data);
        console.log("movies a</Switch></Switch>re ", movies);
        console.log("the parms is ", pageNumber);
      })
      .catch((error) => {
        console.log("error in api ");
      });
  };
  useEffect(fetchMovie, [pageNumber]);

  return (
    <>
      {/* <Example></Example> */}
      <Header></Header>
      <Pagination></Pagination>
      <div className="inline-grid  sm:grid-cols-3 xl:grid-cols-5 gap-4 pl-10 mx-4 justify-center mt-10">
        {movies.map((movie) => {
          const favourt = isCardInFavourt(movies, movie);
          console.log("car is", favourt);

          return (
            <Card
              movie={movie}
              handleFavourt={handleFavourt}
              intial={!favourt}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Main;
