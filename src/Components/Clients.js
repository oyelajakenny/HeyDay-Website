import React from "react";
import { Link } from 'react-router-dom'


const Clients = () => {
  return (
    <div className="clients-section">

      <div className="clients-wrapper">
<h2>Clients Who Trust Us</h2>
<img src="./clients.png"/>
        
      </div>
      <div className="testimonial-section">
      <h3>What Our Clients Are Saying </h3>
      <div className="clients-testimonial">

        <div className="testimonial">
          
          <img src="./client1.png"/>
          <h4>Tunde Adeyeye</h4>
          <p>From the moment I reached out to them, their team demonstrated unparalleled professionalism and attention to detail. Not only did they deliver top-notch quality prints well within the promised timeframe, but their customer service also exceeded my expectations.</p>
        </div>
        <div className="testimonial">  <img src="./client2.png"/><h4>Ayishat Kilani</h4><p>The print quality was impeccable, capturing every detail with precision. What truly set them apart was their commitment to customer satisfaction and their ability to accommodate last-minute changes without compromising on excellence.</p></div>
        <div className="testimonial">  <img src="./client3.png"/><h4>Mubarak Akintunde</h4><p>Their dedication to delivering outstanding results makes them my go-to choice for all future printing projects. Thank you, Heyday Printing Company, for turning my vision into a reality and for your unwavering commitment to excellence!"</p></div>
      </div>
      </div>
    </div>
  );
};

export default Clients;
