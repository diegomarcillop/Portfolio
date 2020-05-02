import React from "react";
import "./Contact.css";
function Contact() {

  const element = React.createRef();
  
  const action = () => {
    console.log("SI SEÑOR");
  }

  return (
    <> 
        <div className="form-group" id="contact"   >
          <h2 className="title">Contact me</h2>
          <div className="form">
            <input
              type="text"
              autoComplete="off"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="form">
            <input
              type="email"
              autoComplete="off"
              name="name"
              required
              placeholder="Email"
            />
          </div>

          <div className="form-area">
            <textarea rows="10" cols="50" placeholder="Message" />
          </div>
          <div className="form-action">
          <button>Send</button>
        </div>
        </div> 
    </>
  );
}
export default Contact;
