import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-end homeContainer">
      <div className="relative w-full h-[300px]">
        <div
          className="absolute w-full h-full left-0 bottom-0 z-50 opacity-100 wave"
          id="wave1"
        ></div>
        <div
          className="absolute w-full h-full left-0 bottom-[110px] z-20 opacity-20 wave"
          id="wave2"
        ></div>
        <div
          className="absolute w-full h-full left-0 bottom-[10px] z-30 opacity-50 wave"
          id="wave3"
        ></div>
        <div
          className="absolute w-full h-full left-0 bottom-[100px] z-40 opacity-75 wave"
          id="wave4"
        ></div>
      </div>
    </div>
  );
}

export default Home;
