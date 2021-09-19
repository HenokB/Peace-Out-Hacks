import React from "react";
import { Link } from "react-router-dom";
import Map from "../Map.png";

export default function Navbar() {
  return (
    <nav className="h-20 bg-green-800 text-white font-semibold">
      <ul className="flex items-center justify-between h-full px-10">
        <div className="flex flex-row items-center p-2 border-r-2 border-green-500 border-opacity-25">
          <img
            src={Map}
            className="w-16 bg-green-600 rounded-full border border-green-700 shadow"
          />
          <p className="p-3 font-black">App Name</p>
        </div>
        <div className="flex justify-between w-9/12">
          <Link to="/">
            <li>Home Page</li>
          </Link>
          <Link to="/formpage">
            <li> Add Report </li>
          </Link>
          <Link to="/blogppage">
            <li> Blog Page </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}
