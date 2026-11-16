
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="page-container">

      <div className="page-heading">

        <p className="subtitle">ABOUT STAYEASE</p>

        <h1>Travel Better. Stay Better.</h1>

        <p>
          Get to know more about our platform.
        </p>

      </div>


      <div className="about-content">

        <h2>Who We Are</h2>

        <p>
          StayEase is a hotel discovery website
          designed to help travelers explore different
          destinations and discover suitable places
          to stay.
        </p>


        <h2>Our Mission</h2>

        <p>
          Our mission is to make discovering
          accommodation easier by providing visitors
          with a simple and enjoyable browsing experience.
        </p>


        <h2>Why Choose StayEase?</h2>

        <ul>

          <li>Explore beautiful destinations.</li>

          <li>Discover different hotels and resorts.</li>

          <li>Search for hotels easily.</li>

          <li>Save your favourite hotels.</li>

          <li>Enjoy a simple and user-friendly website.</li>

        </ul>

      </div>

    </div>
  );
}

export default About;
