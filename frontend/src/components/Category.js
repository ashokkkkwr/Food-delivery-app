import React, { useState, useEffect } from 'react';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Category() {
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  const fetchTopRestaurants = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch top restaurants');
      }
      const data = await response.json();

      // Extract unique restaurants from products
      const uniqueRestaurants = [...new Set(data.map(product => product.restaurant))];
      
      // Sort restaurants by restaurantRate in descending order
      const sortedRestaurants = uniqueRestaurants.map(restaurant => {
        const productsForRestaurant = data.filter(product => product.restaurant === restaurant);
        return {
          restaurantName: restaurant,
          restaurantRate: Math.max(...productsForRestaurant.map(product => product.restaurantRate)), // Get the maximum restaurantRate for the restaurant
          restaurantImage: productsForRestaurant[0].restaurantImage // Assuming each restaurant has the same image for simplicity
        };
      }).sort((a, b) => b.restaurantRate - a.restaurantRate);
      
      // Select the top 3 restaurants
      const top3Restaurants = sortedRestaurants.slice(0, 3);

      setTopRestaurants(top3Restaurants);
    } catch (error) {
      console.error('Error fetching top restaurants:', error.message);
      // Handle error
    }
  };

  return (
    <div>
      <div className='second_nav'>
        <p>Up to -40% 🎊 Order.uk exclusive deals</p>
        <ul>
          <li>Vegan</li>
          <li>Sushi</li>
          <li>Pizza & Fast food</li>
          <li>Others</li>
        </ul>
      </div>
      <div className='restaurant'>
        {topRestaurants.map((restaurant, index) => (
          <div key={index} className='contains'>
            <div>
              <img src={restaurant.restaurantImage} alt={`Restaurant ${index}`} />
              
              <div className='texts'>
                <h3><FontAwesomeIcon icon={faUtensils} /> Restaurant</h3>
                <p>{restaurant.restaurantName}</p>
                <div className='rate'>
                  <FontAwesomeIcon icon={faStar} />
                  {restaurant.restaurantRate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
