import React from "react";

import ReviewsSlider from "./reviewsSlider";

const Reviews = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto border-t-2 border-accent">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title mt-2 before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="subtitle">
            Here are some recent reviews from my customers!
          </p>
        </div>
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Reviews;
