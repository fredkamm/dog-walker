import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

import Image from "../assets/images/coverImage.jpeg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <img
            className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          {/* <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Fred Kamm
              </h2>
              <p className="mb-4 text-accent">
                Freelance Frontend Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla beatae consectetur eligendi, voluptate explicabo consequuntur, dolorum a nam officiis ea voluptates at ratione! Quos et autem ratione error hic est?
              </p>
            </div>
            <Link to="contact" smooth={true} duration={800}>
              <button className="btn group btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
