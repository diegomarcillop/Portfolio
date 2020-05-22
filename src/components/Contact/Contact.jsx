import React from "react";
import "./Contact.css";
function Contact() {
 

  return ( 
        <div className="content_contact">
          <div className="form-group" id="contact"   >
          <h1 >Contact me</h1>
          <p>Contact me by sending a message and let's work together on great ideas!</p>
          <div className="form">
            <input
              type="text" 
              name="name"
              required
              placeholder="Name"
            />
             <input
              type="email" 
              name="name"
              required
              placeholder="Email"
            />
          </div> 

          <div className="form-area">
            <textarea type="text" rows="10" cols="50" placeholder="Message" />
          </div>
          <div className="form-action">
          <button className="btn_know_more">Send</button>
        </div>
        </div>  
        </div>
  );
}
export default Contact;
