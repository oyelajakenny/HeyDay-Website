import React from "react";
import { Link } from 'react-router-dom'


const Bestsellers = () => {
  return (
    <div className="best-sellers">
      <h2>Featured Products</h2>
      <div className="best-sellers-wrapper">
        <div className="best-seller">
          <img src="./tc.jpg" alt="Business cards"/>
          <p>Smart Business Card</p>
          <hr />
        <a href="https://wa.me/p/2646082355487588/2349053657584"><input type="button" value="Order Now" name="order now" /></a>  
        </div>
        <div className="best-seller">
          <img src="./id-card.jpg"  alt="ID cards"/>
          <p>ID Cards</p>
          <hr />
          <input type="button" value="Order Now" name="order now" />
        </div>
        <div className="best-seller">
          <img src="./thank you.png" alt="Thank you Card" />
          <p>Thank You Card</p>
          <hr />
          <input type="button" value="Order Now" name="order now" />
        </div>
        <div className="best-seller">
          <img src="./stickers.png" alt="Sticker"/>
          <p>Stickers</p>
          <hr />
       <a href="https://wa.me/p/4985396321569481/2349053657584"><input type="button" value="Order Now" name="order now" /></a>   
        </div>
        <div className="best-seller">
          <img src="./rollup.png" alt="Roll up Banner"/>
          <p>Roll Up Banner</p>
          <hr />
          <input type="button" value="Order Now" name="order now" />
        </div>
      </div>
      <div className='explore'>
 <a href="https://wa.me/c/2349053657584"> <input type='button' value="Explore All Products" name='explore'/></a>  
   </div>
    </div>
  );
};

export default Bestsellers;
