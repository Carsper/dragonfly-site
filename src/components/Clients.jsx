import React from "react";
import { client_feedback } from "../data";

function Clients() {
  return (
    <div className=" w-full  p-3  bg-no-repeat bg-right bg-cover bg-[url('/src/assets/unsplash_clients.png')]">
      <h1 className="text-red-900 font-poppins font-bold text-3xl text-left py-10 md:px-28">
        This is what clients <br /> say about us
      </h1>
      <div className="relative grid grid-cols-1 justify-start md:grid-cols-2 py-10 md:px-28 gap-5">
        {client_feedback.map((client) => (
          <div
            key={client.client_id}
            className="w-full md:w-2/3 flex flex-col justify-start p-4 bg-white rounded-lg shadow-md "
          >
            <div className="flex pb-5">
              <img
                src={client.picture}
                className="w-[70] h-[70px] rounded-full "
                alt="${trip.destination}"
              />
              <div className="flex flex-col pl-5">
                <h1 className="p-1 font-poppins font-bold text-lg">
                  {client.names}
                </h1>
                <h3 className="p-1 font-roboto text-sm text-gray-500">
                  {client.client_company}
                </h3>
              </div>
            </div>
            <p className="p-1 text-gray-900 font-roboto">{client.comment}</p>
            <span className="p-1">{client.rating}</span>
          </div>
        ))}
      </div>
      <div className="max-w-[800px] mx-3 bg-red-900 py-8 px-8 flex flex-col md:flex-row md:justify-between md:items-center md:mx-auto text-white rounded-2xl">
        <div>
          <p className="flex flex-col">
            <span className="font-poppins text-2xl font-bold pb-3">
              Don't Hesitate <br /> to contact us,
            </span>
          </p>
        </div>
        <div className="">
          <button className=" bg-white rounded-lg w-full text-gray-900 font-bold md:w-[200px] my-6 px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients;
