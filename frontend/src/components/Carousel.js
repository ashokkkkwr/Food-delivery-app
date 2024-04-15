import React from "react";
import hero from "../assets/untitled-2-1.png";
import hero1 from "../assets/untitled-1-1.png";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div>
      <div className="main">
        <img className="container_img1" src={hero1} alt="her bau" />
        <img className="container_img" src={hero} alt="her bau" />

        <div className="oval"></div>
        <div className="p">
          <p className="p1">Order Restaurant food, takeaway and groceries.</p>
          <h1 className="p2">
            Feast Your Senses,
            <br />
          </h1>
          <h1 className="p3">Fast and Fresh</h1>
          <p className="p4">Search a food item to see what we deliver</p>

          {/* Search Bar and Button */}
          <div className="search-container">
            <input type="text" placeholder="Eg: Fired Chicken" />
            <button type="button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
