import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Star from "../components/Favicon";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
const Favourts = () => {
  const dispatchFavourt = useDispatch();

  // const favourtsMovies = use;
  const handleFavourt = (movie) => {
    // console.log("id is", id);
    dispatchFavourt({ type: "ADDFAV", payload: movie });
  };
  const movies = useSelector((state) => state.data);

  return (
    <div className="inline-grid  sm:grid-cols-3 xl:grid-cols-5 gap-4 pl-10 mx-4 justify-center mt-10">
      {/* {movies.map((movie) => {
        return (
          <div className="relative ">
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
              <button>
                <Star full={true} className="  inline "></Star>
              </button>
              <p className="top-2 text-center text-lg text-bold inline ">
                {movie.original_title}
              </p>
            </div>
          </div>
        );
      })} */}

      {movies.map((movie) => (
        <Card movie={movie} handleFavourt={handleFavourt} intial={true}></Card>
      ))}
    </div>
  );
};

export default Favourts;
