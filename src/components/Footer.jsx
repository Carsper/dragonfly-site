import React from "react";
import Logo from "../assets/favicon.ico";
import { company, services, offices } from "../data";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
      {/* Brand Logo */}
      <div className="flex justify-center md:flex-start md:items-center">
        <a href="#">
          <img src={Logo} className="h-30 w-38" alt="dragonfly logo" />
        </a>
      </div>
      <div className=" p-5">
        <h1 className="text-center md:text-left font-poppins font-bold text-lg">
          Company
        </h1>
        <ul className="flex flex-col justify-center items-center md:items-start  pt-2 pb-5 font-roboto">
          {company.map((p) => (
            <a key={p.ft_id} className="py-2">
              {p.comp}
            </a>
          ))}
        </ul>
      </div>
      <div className=" p-5">
        <h1 className="text-center md:text-left font-poppins font-bold text-lg ">
          Services
        </h1>
        <ul className="flex flex-col justify-center items-center md:items-start  pt-2 pb-5 font-roboto">
          {services.map((s) => (
            <a key={s.sv_id} className="py-2">
              {s.service}
            </a>
          ))}
        </ul>
      </div>
      <div className=" p-5">
        <h1 className="text-center md:text-left font-poppins font-bold text-lg ">
          Offices
        </h1>
        <ul className="flex flex-col justify-center items-center md:items-start  pt-2 pb-5 font-roboto">
          {offices.map((of) => (
            <a key={of.of_id} className="py-2">
              {of.detail}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
