
import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {

  const [state, setState] = useState({

    fname: "",
    email: "",
    message: ""

  });


  

  const handleChange = e => {

    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value
    });

  };


 

  const handleSubmit = e => {

    e.preventDefault();

    alert(
      "Thank you " + state.fname +
      "! Your message has been received."
    );


    setState({

      fname: "",
      email: "",
      message: ""

    });

  };


  return (

    <div className="page-container">

      <div className="page-heading">

        <p className="subtitle">GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p>
          We would love to hear from you.
        </p>

      </div>


      <div className="contact-box">

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="fname"
            placeholder="Enter your full name"
            value={state.fname}
            onChange={handleChange}
            required
          />


          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
            required
          />


          <label>Your Message</label>

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={state.message}
            onChange={handleChange}
            required
          />


          <button type="submit" className="main-button">
            Send Message
          </button>

        </form>

      </div>

    </div>

  );

}

export default Contact;
