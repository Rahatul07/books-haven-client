import React from "react";
import flag from "../../../src/assets/flags/united-states-of-america.png";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <div className="bg-secondary ">
      <div className=" md:flex justify-between py-2 w-10/12 mx-auto">
        <div className=" flex mx-36 md:mx-0">
          <div className="flex mr-5">
            <img src={flag} alt="" className="w-5 h-5" />
            <h1 className="ml-2">English</h1>
          </div>
          <select className="  max-w-xs pr-2  bg-transparent">
            <option>USD $</option>
            <option>EUR</option>
          </select>
        </div>

        <div className="mx-10 md:mx-0">
          <Link className="mx-5">My Account </Link> <span>|</span>
          <Link className="mx-5">Checkout </Link>
          <span>|</span>
          <Link className="mx-5">SignIn</Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
