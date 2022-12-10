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
          <div className="flex flex-col lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Your friendly neighborhood pet care specialist
              </h2>
              <p className="mb-4 text-accent">
                Weather your going on vacation, business trip, or spending long hours away from your pup. My service as a pet care specialist will be there to take care of your pet.
              </p>
              <hr className="mb-5 opacity-5" />
              <ul>
                <li>Specializing in dog walking and in home pet sitting for cats and dogs while you are away</li>
                <li>My time and attention will be focused on your pets care</li>
                <li>A handwritten note is left after each visit with detailing your pets time spent with me</li>
              </ul>
            </div>
            <Link to="contact" smooth={true} duration={800}>
              <button className="btn group mt-5 btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
