import React, { useState, useEffect } from 'react';
import './Category2.css';

export default function Category2() {
  const [uniqueRestaurants, setUniqueRestaurants] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const restaurantsPerPage = 6;

  useEffect(() => {
    // Fetch restaurant data from your backend API
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();
      // Filter out duplicate restaurants based on restaurant name
      const uniqueData = Array.from(new Set(data.map(restaurant => restaurant.restaurant)))
        .map(name => {
          return data.find(restaurant => restaurant.restaurant === name);
        });
      setUniqueRestaurants(uniqueData); // Update uniqueRestaurants state with fetched and filtered data
    } catch (error) {
      console.error('Error fetching restaurants:', error.message);
      // Handle error
    }
  };

  const handleNext = () => {
    if (startIndex + restaurantsPerPage < uniqueRestaurants.length) {
      setStartIndex(startIndex + restaurantsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - restaurantsPerPage >= 0) {
      setStartIndex(startIndex - restaurantsPerPage);
    }
  };

  return (
    <div>
      <div className='forth_nav'>
        <p>Popular Restaurants</p>
      </div>
      <div id='popular1'>
        {uniqueRestaurants.slice(startIndex, startIndex + restaurantsPerPage).map((restaurant, index) => (
          <div key={index}>
            <img src={restaurant.restaurantImage} alt={restaurant.restaurant} />
            <p>{restaurant.restaurant}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className='prev' onClick={handlePrev}>Prev</button>
        <button className='next' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
