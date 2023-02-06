import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const favcount = useSelector((state) => state.count);

  return (
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 fixed top-0">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <NavLink
            class="text-sm font-bold  inline-block mr-4 py-2  uppercase text-white"
            to="/login"
          >
            login
          </NavLink>
          <button
            class="cursor-pointer text-xl  px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none mr-auto">
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold  text-white hover:opacity-75"
                href="#pablo"
              >
                <i class="fab fa-facebook-square text-lg  text-white opacity-75" />
              </a>
            </li>
            <li class="">
              <NavLink
                to="/"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold  text-white hover:opacity-75"
              >
                <i class="fab  text-lg leading-lg text-white opacity-75" />
                <span class="ml-2 text-lg">Home</span>
              </NavLink>
            </li>
            <li class="">
              <NavLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold  text-white hover:opacity-75"
                to="/favourts"
              >
                <span class="ml-2 text-lg">favourts</span>
              </NavLink>
            </li>
            <span className="p-2  bg-gray-50 rounded-sm">{favcount} </span>
          </ul>
          <div class="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
            <div class="flex">
              <span class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid rounded-full text-sm bg-pink-100 items-center rounded-r-none pl-2 py-1 text-pink-800 border-r-0 placeholder-pink-300">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <input
              type="text"
              class="px-2 py-1 h-8 border border-solid  border-white-600 rounded-full text-sm leading-snug   shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 "
              placeholder="Search movie"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
