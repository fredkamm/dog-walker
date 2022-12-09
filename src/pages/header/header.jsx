import React, { useEffect, useState } from "react";

import Navbar from "./navbar";
import NavMobile from "./navmobile.jsx";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        {/* <a href=''>
          <img className='h-[250px]' src={Logo} alt='' />
        </a> */}
        {/* nav */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
