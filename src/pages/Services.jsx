
import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <div className="page-container">

      <div className="page-heading">

        <p className="subtitle">WHAT WE OFFER</p>

        <h1>Our Services</h1>

        <p>
          Everything you need to discover your next stay.
        </p>

      </div>


      <div className="services-content">

        <div className="service-item">

          <h2>01. Hotel Discovery</h2>

          <p>
            Explore different hotels and resorts
            in beautiful destinations around the world.
          </p>

        </div>


        <div className="service-item">

          <h2>02. Hotel Search</h2>

          <p>
            Search for hotels by name and filter
            results according to your preferred destination.
          </p>

        </div>


        <div className="service-item">

          <h2>03. Favourite Hotels</h2>

          <p>
            Save your favourite hotels and find
            them again whenever you visit the website.
          </p>

        </div>


        <div className="service-item">

          <h2>04. Easy Navigation</h2>

          <p>
            Browse the website easily through
            its simple and organized navigation menu.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Services;
