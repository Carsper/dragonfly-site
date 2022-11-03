import React, { useState } from "react";
import { navLinks } from "../data";
import Logo from "../assets/favicon.ico";

function Navigation() {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="max-w-[1240px] mx-auto p-1 bg-white text-gray-700 flex justify-between font-poppins font-semibold items-center ">
      {/* Brand Logo */}
      <div className="">
        <a href="#">
          <img src={Logo} className="h-10 w-38" alt="dragonfly logo" />
        </a>
      </div>
      {/* Main Navigation */}
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <a href={link.link} key={link.id} className="p-2 text-gray-700">
            {link.title}
          </a>
        ))}
      </ul>
      {/* Call to Action Buttons */}
      <div className="hidden md:flex justify-between items-center font-semibold p-1 gap-4">
        <div>
          <a href="#" className="">
            Login
          </a>
        </div>
        <div>
          <div className="w-[200px]  px-6 py-3 shadow rounded-md bg-red-900 text-white">
            Became a dragon
          </div>
        </div>
      </div>

      {/* Menu icon */}
      <div onClick={handleMenu} className="block md:hidden">
        <ion-icon size={120} name={!open ? "close" : "menu"}></ion-icon>
      </div>
      {/* Menu Links */}
      <div
        className={
          !open
            ? " fixed left-0 top-0 w-[80%] h-full font-poppins bg-white eas-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        {/* Brand Logo */}
        <div className="mt-4">
          <a href="#">
            <img src={Logo} className="h-10 w-38" alt="dragonfly logo" />
          </a>
        </div>
        <ul className="flex flex-col items-center pt-24 uppercase">
          {navLinks.map((link) => (
            <a
              href={link.link}
              key={link.id}
              className="p-4 border-b border-gray-600 text-gray-700"
            >
              {link.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
