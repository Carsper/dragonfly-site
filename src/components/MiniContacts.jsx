import React from "react";

function MiniContacts() {
  return (
    <div className="max-w-[1240px] mx-auto flex justify-end">
      <div className="w-full md:w-4/5 bg-red-900 flex justify-between items-center gap-6 p-2 text-white sm:text-sm">
        <div className="flex gap-2">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-google"></ion-icon>
        </div>
        <div className="md:flex md:justify-end hidden gap-2">
          <div className="">
            <p>Contact Us:</p>
          </div>
          <div>
            <span> +254 702 123 456 </span>
          </div>
          <div>
            <span> +245 738 654 321 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniContacts;
