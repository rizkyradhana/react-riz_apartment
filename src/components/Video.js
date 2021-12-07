import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import spaceVideo from "../assets/teaser.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Riz. Apartment.</h1>
        <p>Jakarta's finest civilian Apartment.</p>
        <div>
          <Link to="/pricing" className="btn">
            Book Now
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
