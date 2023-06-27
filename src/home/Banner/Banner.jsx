import React from "react";

const Banner = () => {
  return (
    <div
      className="mb-20"
      style={{
        background: `url("/src/assets/banner/01.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "600px",
        position: "relative",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",

          color: "white",
        }}
      >
        <h1
          className="text-3xl  lg:text-5xl mb-5 mt-20"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          We can help get your
        </h1>
        <p className="text-primary text-7xl  lg:text-9xl font-bold">
          Books in Order
        </p>
        <p
          className="text-3xl  lg:text-5xl mb-5 mt-5"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          and Accessories
        </p>
        <button className="btn btn-primary text-white w-60 text-xl mt-10">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
