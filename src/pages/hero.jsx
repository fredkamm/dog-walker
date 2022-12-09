import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className='bg-[url("https://www.purina.co.uk/sites/default/files/2021-01/Article%20Hero%20puppy%20walk.jpg")] bg-cover bg-center h-96 w-full p-9'
    >
      <div className="inline bg-blue-50">hello</div>
      <div>Do you feel guility leaving your dog alone all day?</div>
      <Link to="contact" smooth={true} duration={800}>
        <button className="btn group btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
          Lets Walk!
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default Hero;
