import React, { useEffect, useState } from "react";

import Navbar from "./navbar";
import NavMobile from "./navmobile";
// import Logo from "../../assets/images/walkingLogo.png"

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
        <a href='home'>
          <h3 className="bg-secondary bg-opacity-80 p-3 ml-5">Call now (555)555-5555</h3>
        </a>
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
