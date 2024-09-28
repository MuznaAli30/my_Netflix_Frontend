import React from "react";
import {Link} from 'react-router-dom'

export default function HeaderHome() {
  return (
    <div className="flex w-[100%] absolute z-10 px-6 items-center justify-between bg-gradient-to-b from-black">
      <img
        className="w-56 m-5 ml-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="netflixLogo"
      />

      <div className="ml-4 ">
        <Link to={"/Login"} className="bg-red-800 rounded-lg hover:bg-red-700 text-white py-2 px-4 ">
          Sign in
        </Link>
      </div>
    </div>
  );
}
