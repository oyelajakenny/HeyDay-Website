import React from "react";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-wrapper">
      <div className="footer-content">
      <Link to="/"><img src="./logo-white.png" alt="Heyday Prints Logo"/></Link>    
         <p> We transform your visions into tangible reality. </p>
        </div>
      <div className="footer-content">
          <h4>Heyday</h4>
          <Link to="/">  <a href="">Home</a><br/></Link>
          <Link to="/about"><a href="">About Us</a><br/></Link>
          <Link to="/service"><a href="">Our Services</a><br/></Link>
          <Link to="/contact"><a href="">Contact Us</a><br/></Link>
          <Link to="/portfolio"><a href="">Our Portfolio</a><br/></Link>
        </div>
        <div className="footer-content">
          <h4>Quick Links</h4>
         <a href="">Upload Your Design</a><br/>
         <a href="">Upload Your Logo</a><br/>
         <Link to="/contact">  <a href="">Request For Quote</a><br/></Link>
         <a href="https://wa.me/c/2349053657584">View Catalogue</a><br/>
        </div>
        <div className="footer-content">
          <h4>Services</h4>
          <a href="">Heat Transfer</a><br/>
         <a href="">Sublimation</a><br/>
         <a href="">Monogram</a><br/>
         <a href="">Custom Printing</a><br/>
         <a href="https://wa.me/p/5418052801641754/2349053657584">Digital Printing</a><br/>
         <a href="">Direct To Garment</a><br/>
        </div>
        <div className="footer-content">
          <h4>Products</h4>
          <a href="https://wa.me/p/2646082355487588/2349053657584">Business Card</a><br/>
         <a href="https://wa.me/p/4985396321569481/2349053657584">Stickers</a><br/>
         <a href="">Banners</a><br/>
         <a href="">Custom Shirts</a><br/>
         <a href="">Corporate Gifts</a><br/>
         <a href="">Promotional Items</a><br/>
        

        </div>
        
      </div>
      <div className="copyright">      
      <p> &copy; 2024 Heyday Prints Incorporated | Website Developed by <a href="https://www.linkedin.com/in/oyelaja-hussein"  >Oyelaja Hussein</a> </p>
</div>
<div className='social'>
      <a href="https://www.instagram.com/heydayprints"  ><img src='./ig.png'/></a>  
      <a href="https://www.facebook.com/heydayprints"  ><img src='./fb.png'/></a>  
      <a href="https://www.twitter.com/heydayprints"  >   <img src='./x.png'/></a>
          <img src='./lin.png'/>
          <img src='./wa.png'/>
        </div>
    </div>
  );
};

export default Footer;
