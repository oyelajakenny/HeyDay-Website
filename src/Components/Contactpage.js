import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from '@formspree/react';
import Thanks from "./Thanks";



const Aboutpage = () => {
  const onChange = () => {};
  const [state, handleSubmit] = useForm("mdoqgzvp");
  if (state.succeeded) {
     return <Thanks/>;
     }
  return (
    <div className="contactsection">
      <div className="contact-header">
        <h1>We want to hear from you</h1>
      </div>
      <div className="contact-wrapper">
        <div className="contact-details">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5515403571067!2d3.2138925!3d6.5781389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d5d5c1c71d5%3A0x4f09c6bd3f116d78!2sHeyday%20Prints!5e0!3m2!1sda!2sdk!4v1705939284546!5m2!1sda!2sdk"></iframe>
          </div>

          <div className="details">
           
            <address>
              
              <strong>Office:</strong> 48 Evangelical St, Alimosho, Lagos
              100001, Lagos, Nigeria
            </address>
          </div>
          <div className="details">
            <p>
              <strong>Phone:</strong> +234 905 3657 584 | +234 817 1996 754
            </p>
          </div>
          <div className="details">
            <p>
              <strong>Email:</strong> hello@heydayprints.com
            </p>
          </div>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" id="fname" name="Full Name" required />
            </label>
            <ValidationError 
        prefix="Full Name" 
        field="fname"
        errors={state.errors}
      />

            <label>
              Email:
              <input type="email" name="Email" required />
            </label>
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <label>
              Phone Number:
              <input type="number" id="phone" name="Phone Number" min="11" required />
            </label>
            <ValidationError 
        prefix="Phone Number" 
        field="phone"
        errors={state.errors}
      />
            <label>
              Select A Product:
              <select id="product" name="Product">
                <option>(select Product)</option>
                <option>Business Card</option>
                <option>Flier</option>
                <option>Roll up Banner</option>
                <option>Flex Banner</option>
                <option>Tshirts</option>
                <option>Polo</option>
                <option>Thank You Card</option>
                <option>Notebooks</option>
                <option>Mugs</option>
                <option>Pens</option>
              </select>
            </label>
            <ValidationError 
        prefix="Select A Product" 
        field="product"
        errors={state.errors}
      />
            <label>
              Your Message:<textarea id="message" name="Message" row="50" col="30" required></textarea>
            </label>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            <ReCAPTCHA
    sitekey="6Ley5XMpAAAAAHYNKx5Mzkccl2z6KBxR11nQLovw"
    onChange={onChange}
  />
          
            <input type="submit" value="Submit" name="form" disabled={state.submitting} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage
