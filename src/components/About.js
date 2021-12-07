import React from "react";
import "./AboutStyles.css";

import { Link } from "react-router-dom";

import Pod from "../assets/pic4.jfif";
import Moon from "../assets/pic5.jfif";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About</h1>
        <p>
          Riz. Apartment is a beautiful hotel & resorts that really suitable for
          everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
