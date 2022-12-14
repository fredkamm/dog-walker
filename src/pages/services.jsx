import React from "react";

import { services } from "../data";

const Services = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto border-t-2 border-accent">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative mt-5 before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Services
          </h2>
        </div>
        <div className="flex flex-col mt-5 lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {services.map((item, index) => {
              const { icon, description } = item;
              return (
                <div
                  className="flex flex-row border-dashed border-t-2 border-accent m-auto lg:flex-row gap-x-4 sm:flex-row"
                  key={index}
                >
                  <div className="text-paragraph rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <p className="text-lg text-paragraph">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
