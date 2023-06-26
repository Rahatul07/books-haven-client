import React from "react";
import TopNav from "../shared/header/topNav";
import Header from "../shared/header/header";
import Navbar from "../shared/header/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <TopNav />
      <Header />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
