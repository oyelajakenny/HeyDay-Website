import React from "react";
import { Link } from 'react-router-dom'


const Whyus = () => {
  return (
    <div className="why-us">
      <h3>Why Choose Us</h3>
      <hr />
      <div className="why-us-wrapper">
        <div className="why-us-1">
          <img src="./quality.png" alt="Quality" />
          <h3>Exceptional Quality</h3>
          <p>
            We pride ourselves on delivering prints with sharp, vivid colors and
            crisp detail
          </p>
        </div>

        <div className="why-us-1">
          <img src="./response.png" alt="Quality" />
          <h3>Quick Turnaround</h3>
          <p>
            Time is of the essence, and we understand that. Our efficient
            processes guarantee timely delivery without compromising on quality
          </p>
        </div>
        <div className="why-us-1">
          <img src="./solution.png" alt="Quality" />

          <h3>Versatile Solutions</h3>
          <p>
            From offset printing to digital printing, we cater to diverse needs,
            ensuring flexibility in every project
          </p>
        </div>

        <div className="why-us-1">
          <img src="./settings.png" alt="Quality" />

          <h3>Personalized Service</h3>
          <p>
            Your satisfaction is our priority. Our dedicated customer support
            team is always ready to assist you at every step.
          </p>
        </div>
       
      </div>
<div className="our-products">

    <div className="our-products-header">

        <h4>OUR LIST OF PRODUCTS</h4>
        <p>Explore our portfolio, request a quote, or contact us to discuss your printing needs.<br></br>  Let PrintCraft Studios beyour trusted partner in turning your ideas into stunning reality!</p>
    </div>
      <div className="our-products-wrapper m">
       

      
      <div className="product">
    <img src="./billboard.png" alt="Flex banner"/>
    <p>Banner</p>

        </div> <div className="product">
    <img src="./business-card.png" alt="Business card"/>
    <p>Business Card</p>
        </div> <div className="product">
    <img src="./flyer.png" alt="Flyer"/>
    <p>Flyer</p>
        </div> <div className="product">
    <img src="./diary.png" alt="Diary"/>
    <p>Diary</p>
        </div> <div className="product">
    <img src="./notebook.png" alt="Note Book"/>
    <p>Notebook</p>
        </div> <div className="product">
    <img src="./shopping-bag.png" alt="Carrier Bag"/>
    <p>Carrier Bag</p>
        </div> <div className="product">
    <img src="./tshirt.png" alt="Tshirts"/>
    <p>tshirt</p>
        </div> <div className="product">
    <img src="./identity-card.png" alt="ID Card"/>
    <p>ID Card</p>
        </div> <div className="product">
    <img src="./cap.png" alt="branded face cap"/>
    <p>Face Cap</p>
        </div> 
        <div className="product">
    <img src="./polo-shirt.png" alt="Polo shirt"/>
    <p>Branded Polo</p>
        </div> 
        <div className="product">
    <img src="./pen.png" alt="branded pen"/>
    <p>Pen</p>
        </div> <div className="product">
    <img src="./illustrator-draw.png"/>
    <p>Logo Design</p>
        </div> <div className="product">
    <img src="./label.png" alt="Paper tag"/>
    <p>Paper Tag</p>
        </div> <div className="product">
    <img src="./tote-bag.png" alt="Tote bag"/>
    <p>Tote Bag</p>
        </div> 
      </div>
      </div>
    </div>
  );
};

export default Whyus;
