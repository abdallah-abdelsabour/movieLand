import { useState } from "react";
import { Link } from "react-router-dom";
import Star from "./Favicon";
const Card = ({ movie, handleFavourt, intial }) => {
  const [add, setAdded] = useState(intial);

  return (
    <div className="relative " key={movie.id}>
      <Link to={`/movieDetails/${movie.id}`}>
        <div className="action flex absolute justify-between gap-5">
          <span className=" bg-[#facc15]  left-0 top-0 rounded-full text-center m-auto inline-block p-3 text-blue-800">
            {movie.vote_average}
          </span>
        </div>
        <img
          className=" object-fill "
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
      </Link>
      <div className="div flex justify-center gap-2">
        <button
          onClick={() => {
            handleFavourt(movie);
            setAdded((state) => !state);
          }}
        >
          <Star full={add} className="  inline "></Star>
        </button>
        <p className="top-2 text-center text-lg text-bold inline ">
          {movie.original_title}
        </p>
      </div>
    </div>
  );
};

export default Card;
