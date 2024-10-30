import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import easypaisa from "../assets/easypaisa.png";
import paytm from "../assets/paytm.png";
import faisalbank from "../assets/faisalbank.png";
import hbl from "../assets/hbl.png";
import bop from "../assets/bop.png";
import jazzcash from "../assets/jazzcash.png";
import meezanbank from "../assets/meezanbank.png";
import sadapay from "../assets/sadapay.png";
import ubl from "../assets/ubl.png";
import stripe from "../assets/stripe.png";
import binances from "../assets/binances.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";

const MarqueeSlider = () => {
  // Slick settings for smooth, continuous scrolling
const settings = {
  dots: false,
  infinite: true,
  speed: 5000, // Adjust speed for a smooth scrolling effect
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 for continuous scrolling
  slidesToShow: 5, // Adjust based on how many logos you want visible
  slidesToScroll: 1, // This can be 1 for smoother transitions
  cssEase: "linear", // Make the transition linear for continuous effect
  draggable: false, // Disable dragging to keep it moving smoothly
};

  // Duplicate logos array to achieve seamless effect
  const logos = [
    easypaisa,
    mastercard,
    visa,
    paytm,
    faisalbank,
    hbl,
    jazzcash,
    meezanbank,
    sadapay,
    ubl,
    stripe,
    binances,
    bop,
  ];

  return (
    <div className="relative bg-gray-100 py-4 overflow-hidden">
      {/* Left fade effect */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      {/* Right fade effect */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12" />{" "}
            {/* Adjust logo size if necessary */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MarqueeSlider;
