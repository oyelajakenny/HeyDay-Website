import React from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="trending-section">
      <h2>Trending Products</h2>
      <div className="trending-wrapper">
        <div className="trending-desc">
          <h3>Smart Business Card</h3>
          <p>
            Experience seamless connections with our innovative smart business
            cards! Say goodbye to the hassle of searching for your business on
            social media or sending messages on WhatsApp. With our cutting-edge
            technology, your clients and prospects can effortlessly connect with
            you in just a click.
          </p>

          <a href="https://wa.me/p/2646082355487588/2349053657584">
            <input type="button" value="Order Now" name="trending" />
          </a>
        </div>
        <div className="trending-img">
          <img src="./tc.jpg" alt="Thank you Card" />
        </div>
      </div>

      <div className="trending-wrapper-2">
        <div className="trending-img">
          <img src="./stckr.png" alt="Sticker" />
        </div>
        <div className="trending-desc">
          <h3>Stickers</h3>
          <p>
            With our smart business cards, your clients and prospect easily
            connect with you without going through hassle of searching for your
            business on Social Media or sending you message on WhatsApp. <br />{" "}
            Click on the button Below to try out our smart business card.
          </p>

          <a href="https://wa.me/p/4985396321569481/2349053657584">
            <input type="button" value="Order Now" name="trending" />
          </a>
        </div>
      </div>

      <div className="trending-wrapper-2 reverse">
        <div className="trending-desc">
          <h3>Flyers</h3>
          <p>
            With our smart business cards, your clients and prospect easily
            connect with you without going through hassle of searching for your
            business on Social Media or sending you message on WhatsApp. <br />{" "}
            Click on the button Below to try out our smart business card.
          </p>

          <a href="https://wa.me/p/5418052801641754/2349053657584">
            <input type="button" value="Order Now" name="trending" />
          </a>
        </div>

        <div className="trending-img">
          <img src="./fliers.jpg" alt="Flyers" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
