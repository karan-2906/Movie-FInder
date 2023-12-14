import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { searchMovie } from "../../Feature/currentgenre";
import { useDispatch } from "react-redux";

const Nav = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = () => {
    dispatch(searchMovie(query));
  }

  return (
    <div className="w-full bg-light-blue px-7 py-5 text-white flex justify-center items-center">
      <div className="w-full max-w-[1700px] lg:px-8 flex items-center justify-between gap-3">
        {/* <img src="" alt="" srcset=" " /> */}
        <Link to="/">
          <p className="text-3xl text-white font-bold w-1/5">MoviesFinder</p>
        </Link>
        <div className="rounded-md px-3 py-2 w-3/12 bg-dark-gray hidden sm:flex">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md w-full bg-dark-gray outline-none text-light-gray border-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaSearch className='text-2xl text-light-gray justify-end items-end' onClick={handleKeyPress} />
          {/* <IoMdSearch className="absolute right-2 top-1/2 hidden -translate-y-1/2 sm:block cursor-pointer" onClick={handleKeyPress} /> */}
        </div>
        <Link
          to={`/genre`}
          className="rounded-lg px-3 py-2 bg-dark-gray"
        >
          Select Genre
        </Link>
      </div>
    </div>
  );
};

export default Nav;