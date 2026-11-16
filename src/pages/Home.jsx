
import React from "react";
import { Link } from "react-router-dom";

import dubai from "../Assets/dubai.jpg";
import maldives from "../Assets/maldives.jpg";
import paris from "../Assets/paris.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div>

      

      <section className="home">

        <div className="home-banner">

          <p className="subtitle">
            YOUR JOURNEY STARTS HERE
          </p>

          <h1>
            Find Your Perfect
            <span> Stay.</span>
          </h1>

          <p>
            Discover beautiful hotels and resorts
            around the world. Your next unforgettable
            experience starts with StayEase.
          </p>

          <Link to="/hotels" className="main-button">
            Explore Hotels
          </Link>

        </div>

      </section>


      

      <section className="section">

        <div className="section-heading">

          <p className="subtitle">EXPLORE THE WORLD</p>

          <h2>Popular Destinations</h2>

          <p>
            Discover beautiful places for your next trip.
          </p>

        </div>


        <div className="destination-grid">

          <div className="destination-item">

            <img src={dubai} alt="Dubai Hotel" />

            <h3>Dubai</h3>

            <p>Luxury and modern experiences.</p>

          </div>


          <div className="destination-item">

            <img src={maldives} alt="Maldives Resort" />

            <h3>Maldives</h3>

            <p>Relax in a tropical paradise.</p>

          </div>


          <div className="destination-item">

            <img src={paris} alt="Paris Hotel" />

            <h3>Paris</h3>

            <p>Discover the city of love.</p>

          </div>

        </div>

      </section>


      

      <section className="home-cta">

        <h2>Ready for Your Next Adventure?</h2>

        <p>
          Find the perfect place for your next journey.
        </p>

        <Link to="/hotels" className="main-button">
          Find Your Stay
        </Link>

      </section>

    </div>
  );
}

export default Home;
