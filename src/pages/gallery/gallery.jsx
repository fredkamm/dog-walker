import React from "react";

import ReviewsSlider from "./gallerySlider";

const Gallery = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto border-t-2 border-accent">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title my-5 before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            Gallery
          </h2>
        </div>
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Gallery;
