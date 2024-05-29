import React from "react";
import { Link } from "react-router-dom";


const Mainheader = () => {
  return (
    <div className="main-section">
      <div className="main-desc">
        <h1>Timeless Branding Solutions for Everlasting Impact</h1>
        <p>
          Explore our wide range of printing solutions, from eye-catching
          business cards and vibrant brochures to custom apparel and
          large-format banners.
        </p>
        <div className="main-button">
        <Link to="/contact">  <input type="button" value="Request a quote" name="quote" /></Link>
        <Link to="/contact">      <input type="button" value="Contact Us" name="contact-us" /></Link>
        </div>
      </div>
      <div className="main-img">
        <img src="./home2.png"  alt="Heyday Prints"/>

        <div className="m-bttn">
          <input type="button" value="Request a quote" name="quote" />
          <input type="button" value="Contact Us" name="contact-us" />
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
