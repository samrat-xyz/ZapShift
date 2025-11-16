import React from "react";
import Marquee from "react-fast-marquee";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";

const brands = [amazon, amazon_vector, casio, moonstar, randstad, star];

function Brands() {
  return (
    <div className="my-8 ">

        <div className="text-center ">
            <h2 className="text-2xl font-bold text-secondary">We've helped thousands of sales teams</h2>
        </div>
      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
        className="my-6 p-4"
      >
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt="brand-logo"
            className="mx-6 h-6  object-cover"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Brands;
