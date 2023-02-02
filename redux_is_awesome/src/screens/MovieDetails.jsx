import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../components/Favicon";

const MovieDetails = () => {
  const params = useParams();

  const [movie, setmovie] = useState({ title: "sdfsf" });
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9b743af1d4fde1d65af33c40dcccce87`
      )
      .then((result) => {
        setmovie(result.data);
        console.log(result.data.title);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className=" mx-10 lg:flex justify-between gap-6 leading-8 text-xl px-64 mt-40 shadow ">
      <img
        className=" w-50"
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt=""
        srcset=""
      />
      <div className="  flex-col  justify-center pt-40 text-lg text-center ">
        <p className="text-center ">{movie.title}</p>
        <p>{movie.riginal_title}</p>
        <p>{movie.overview}</p>
        <p>vote_average</p>
        <Star full={true} id={movie.id}></Star>
      </div>
    </div>
  );
};

export default MovieDetails;
