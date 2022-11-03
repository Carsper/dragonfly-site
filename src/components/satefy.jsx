import React from "react";
import pilot from "../assets/unsplash_cockpit.png";
import { list1 } from "../data";

function satefy() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center bg-white pt-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-3">
          <h1 className="font-bold text-3xl text-center md:text-left font-poppins ">
            Safety
          </h1>
          <p className="font-roboto text-gray-900 p-2 mt-4">
            It is a matter of pride for Dragonfly that we have one of the best
            air charter safety records in the region
          </p>
          <ul>
            {list1.map((lst) => (
              <li key={lst.li_id} className="p-2">
                {lst.detail}
              </li>
            ))}
          </ul>
        </div>
        <img src={pilot} className="w-[400px] mx-auto py-8" alt="plane" />
      </div>
    </div>
  );
}

export default satefy;
