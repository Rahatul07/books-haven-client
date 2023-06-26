import React from "react";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="my-5 w-10/12  md:flex mx-auto justify-between items-center">
      <div className="w-8/12 my-5 md:w-full mx-auto">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-8/12 my-5 mx-auto md:mx-10 md:w-full">
        <img src={logo} alt="" className="w-60 mx-auto font-" />
      </div>
      <div className=" w-8/12 md:w-full mx-auto ">
        <div className="flex my-5 items-center justify-center">
          <div>
            <FaShoppingCart className="text-4xl text-gray-600 mr-3" />
          </div>
          <h1 className="text-2xl text-gray-600 font-bold"> My Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
