import React from "react";
import plane from "../assets/Dragonfly image.png";
import { Trips } from "../data";

function Trip() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center bg-white">
      <div>
        <h1 className="text-red-900 font-poppins pb-5 font-bold text-3xl text-center">
          Plan Your Trip
        </h1>
        <p className=" text-gray-900 font-roboto  text-center mx-10 ">
          Dragonfly is totally commited to getting our clients there. We provide
          safe and reliable solutions to these destinations.
        </p>
      </div>
      <div className="relative grid grid-cols-1  md:grid-cols-3 mx-auto px-3 py-10 gap-5">
        {Trips.map((trip) => (
          <div key={trip.trip_id} className=" rounded-lg outline-2 shadow-lg ">
            <img
              src={trip.image}
              className="w-full h-[300px] rounded-lg "
              alt="${trip.destination}"
            />
            <div className="text-center font-poppins font-bold text-lg p-5">
              <h2>{trip.destination}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-3">
          <h1 className="font-bold text-3xl text-center md:text-left ">
            <span className="text-red-900 font-poppins">World class</span> plane
            and exceptional service
          </h1>
          <p className="font-roboto text-gray-900 mt-4">
            Our goal is simply to offer the highest standards of professionalism
            and service as measured by our safety record, dispatch reliability
            and customer satisfaction.
          </p>
          <button className=" bg-red-900 rounded-lg font-poppins uppercase text-white font-bold w-full md:w-[200px] my-10 px-6 py-3">
            Booking Now
          </button>
        </div>
        <img src={plane} className="w-[500px] mx-auto" alt="plane" />
      </div>
    </div>
  );
}

export default Trip;
