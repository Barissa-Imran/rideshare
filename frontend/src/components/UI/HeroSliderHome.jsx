import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../action/AuthContext";
import "../../styles/hero-slider.css";
import { useContext } from "react";

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

  const  {user, logoutUser} = useContext(AuthContext);
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Book Ride or rent Car</h4>
            <h1 className="text-light mb-4">Ride Booking and Rental Services</h1>

          </div>

          <button className="btn reserve__btn mt-4">
            <Link to="/rideshare">BOOK A RIDE  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/cars">RENT A CAR</Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4" onClick={logoutUser}>
             <Link to="/login">LOGOUT</Link> 
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
            <Link to="/rideshare">BOOK A RIDE  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/cars">RENT A CAR</Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4" onClick={logoutUser}>
             <Link to="/login">LOGOUT</Link> 
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
            <Link to="/rideshare">BOOK A RIDE  </Link>
          </button>
          <br />
          <button className="btn reserve__btn mt-4">
              <Link to="/cars">RENT A CAR</Link>
            </button>
          <br />
          <button className="btn reserve__btn mt-4" onClick={logoutUser}>
             <Link to="/login">LOGOUT</Link> 
          </button>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSliderHome;
