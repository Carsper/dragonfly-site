import React from "react";
import CallTo from "./CallTo";

function Hero() {
  return (
    <>
      <div className="">
        <div className="w-full h-[500px]  p-3  bg-no-repeat bg-top bg-cover bg-[url('/src/assets/heroImage.png')]">
          {/* <CallTo /> */}
        </div>
      </div>
      <div className="max-w-[800px] mx-3 my-14 bg-red-900 py-8 px-8 flex flex-col md:flex-row md:justify-between md:items-center md:mx-auto text-white rounded-2xl">
        <div>
          <p className="flex flex-col">
            <span className="font-poppins text-2xl font-bold pb-3">
              Become A Dragon
            </span>
            <span className="font-roboto">Enjoy our loyalty points</span>
          </p>
        </div>
        <div className="">
          <button className=" bg-white rounded-lg w-full text-red-900 font-bold md:w-[200px] my-6 px-6 py-3">
            Sign Up Today
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
