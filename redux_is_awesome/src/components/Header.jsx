import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import LanuageContext from "../Context";

const Header = () => {
  const favcount = useSelector((state) => state.count);

  const changeLnaguageHandler = (e) => {
    console.log(e);
  };

  const CurrentLanguage = useContext(LanuageContext);
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          class="text-white no-underline hover:text-white hover:no-underline"
          to="/page/1"
        >
          <span class="text-2xl pl-2">
            <i class="em em-grinning"></i>MOVIES
          </span>
        </NavLink>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          8
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <input
          type="text"
          class="px-2 py-2 h-8 border border-solid  border-white-600 rounded-full text-sm leading-snug   shadow-none outline-none focus:outline-none w-full font-normal rounded flex-1 border-l-0 ml-10 "
          placeholder="Search movie"
        />
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <NavLink
              class="inline-block py-2 px-4 text-white no-underline"
              to="/favourts"
            >
              FAVOURTS
              <span className=" p-4 rounded bg-gray-900 circle text-yellow-400 ml-5">
                {favcount}
              </span>
            </NavLink>
          </li>
          <li class="mr-3">
            <NavLink
              class="inline-block text-gray-600 no-underline hover:text-gray-200
              hover:text-underline py-2 px-4"
              to="#"
            ></NavLink>
          </li>
          <li class="mr-3">
            <div class="custom-select">
              <select
                onChange={(e) => {
                  changeLnaguageHandler(e);
                }}
              >
                <option value="0">EN</option>

                <option value="12">AR</option>
              </select>
            </div>
          </li>
          <li class="mr-3">
            <NavLink
              class="inline-block text-gray-600 no-underline hover:text-gray-200
              hover:text-underline py-2 px-4"
              to="#"
            >
              logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
