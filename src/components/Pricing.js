import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";
import { BsHouseDoor, BsWifi, BsWind } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Standard -</h3>
          <span className="bar"></span>
          <p className="price_room">Rp1000.000</p>
          <p>
            -{" "}
            <BsHouseDoor
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            3x3 m -
          </p>
          <p>
            -{" "}
            <BsWifi
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free TV and Wifi -
          </p>
          <p>- -</p>
          <p>- -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Superior -</h3>
          <span className="bar"></span>
          <p className="price_room">Rp2000.000</p>
          <p>
            -{" "}
            <BsHouseDoor
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            4x4 m -
          </p>
          <p>
            -{" "}
            <BsWifi
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free TV and Wifi -
          </p>
          <p>
            -{" "}
            <BsWind
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free AC -
          </p>
          <p>- -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Deluxe -</h3>
          <span className="bar"></span>
          <p className="price_room">Rp3000.000</p>
          <p>
            -{" "}
            <BsHouseDoor
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            5x5 m -
          </p>
          <p>
            -{" "}
            <BsWifi
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free TV and Wifi -
          </p>
          <p>
            -{" "}
            <BsWind
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free AC -
          </p>
          <p>
            -{" "}
            <ImSpoonKnife
              size={20}
              style={{ color: "#ffffff", marginRight: ".3rem" }}
            />
            Free Breakfast -
          </p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
