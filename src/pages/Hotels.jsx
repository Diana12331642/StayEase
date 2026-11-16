
import React, { useState } from "react";

import dubai from "../Assets/dubai.jpg";
import maldives from "../Assets/maldives.jpg";
import paris from "../Assets/paris.jpg";
import "../styles/Hotels.css";

const hotels = [
  {
    id: 1,
    name: "Dubai Grand Hotel",
    location: "Dubai",
    description: "Enjoy luxury and beautiful city views.",
    price: 180,
    image: dubai
  },
  {
    id: 2,
    name: "Maldives Paradise Resort",
    location: "Maldives",
    description: "Relax in a beautiful tropical paradise.",
    price: 250,
    image: maldives
  },
  {
    id: 3,
    name: "Paris Elegance Hotel",
    location: "Paris",
    description: "Enjoy comfort in the heart of Paris.",
    price: 150,
    image: paris
  }
];

function Hotels() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("All");

  function toggleFavourite(hotel) {
    let updatedFavourites;

    const alreadySaved = favourites.filter(
      item => item.id === hotel.id
    ).length > 0;

    if (alreadySaved) {
      updatedFavourites = favourites.filter(
        item => item.id !== hotel.id
      );
    } else {
      updatedFavourites = [...favourites, hotel];
    }

    setFavourites(updatedFavourites);

    localStorage.setItem(
      "favourites",
      JSON.stringify(updatedFavourites)
    );
  }

  const filteredHotels = hotels.filter(hotel => {
    return (
      hotel.name.toLowerCase().includes(search.toLowerCase()) &&
      (destination === "All" || hotel.location === destination)
    );
  });

  return (
    <div className="page-container">

      <div className="page-heading">
        <p className="subtitle">FIND YOUR PERFECT STAY</p>
        <h1>Explore Our Hotels</h1>
        <p>Discover beautiful places around the world.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search hotel by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={destination}
          onChange={e => setDestination(e.target.value)}
        >
          <option value="All">All Destinations</option>
          <option value="Dubai">Dubai</option>
          <option value="Maldives">Maldives</option>
          <option value="Paris">Paris</option>
        </select>
      </div>

      <h2 className="results-title">
        Available Hotels ({filteredHotels.length})
      </h2>

      <div className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <div key={hotel.id} className="hotel-item">

              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-image"
              />

              <div className="hotel-info">
                <p className="hotel-location">{hotel.location}</p>
                <h2>{hotel.name}</h2>
                <p>{hotel.description}</p>

                <div className="hotel-bottom">
                  <h3>${hotel.price} / night</h3>

                  <button
                    onClick={() => toggleFavourite(hotel)}
                    className="favorite-button"
                  >
                    {favourites.filter(
                      item => item.id === hotel.id
                    ).length > 0
                      ? "♥ Saved"
                      : "♡ Save to Favourites"}
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <p className="no-results">
            No hotels found. Try another search.
          </p>
        )}
      </div>

      <div className="favourites-section">
        <h2>My Favourite Hotels ♡</h2>
        <p>Your saved hotels are displayed below.</p>

        {favourites.length > 0 ? (
          <div className="favourites-list">
            {favourites.map(hotel => (
              <div key={hotel.id} className="favourite-item">
                <div>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.location} - ${hotel.price} / night</p>
                </div>

                <button onClick={() => toggleFavourite(hotel)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-favourites">
            You haven't saved any favourite hotels yet.
          </p>
        )}
      </div>

    </div>
  );
}

export default Hotels;
