import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSliderHome = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Book Ride or rent Car</h4>
            <h1 className="text-light mb-4">Ride Booking and Rental Services</h1>

          </div>

          <button className="btn reserve__btn mt-4">
            <Link to="/rideshare">Book a ride  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/login">LOGIN  </Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/signup">  SIGNUP</Link>
          </button>
        </Container>
      </div>


      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Book Ride or Rent Car</h4>
            <h1 className="text-light mb-4">Ride Booking and Car Rental Services</h1>
          </div>
          <button className="btn reserve__btn mt-4">
            <Link to="/rideshare">Book a ride  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/login">LOGIN</Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/signup">SIGNUP</Link>
          </button>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Book Ride or rent Car</h4>
            <h1 className="text-light mb-4">Ride Booking and Rental Services</h1>
          </div>

          <button className="btn reserve__btn mt-4">
            <Link to="/rideshare">Book a ride  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/login">LOGIN  </Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/signup">  SIGNUP</Link>
          </button>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSliderHome;
