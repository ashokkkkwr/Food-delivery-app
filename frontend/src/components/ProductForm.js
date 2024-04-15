// ProductForm.jsx

import React, { useState } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import './ProductForm.css'; // Import CSS file

const ProductForm = () => {
    const { dispatch } = useProductsContext();
    const { user } = useAuthContext();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [restaurantImage, setRestaurantImage] = useState('');
    const [restaurantRate, setRestaurantRate] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('You must be logged in');
            return;
        }

        const product = { name, price, img, category, restaurant, restaurantImage, restaurantRate };
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName('');
            setPrice('');
            setImg('');
            setCategory('');
            setRestaurant('');
            setRestaurantImage('');
            setRestaurantRate('');
            setError(null);
            console.log('New product is added', json);
            dispatch({ type: 'CREATE_PRODUCTS', payload: json });
        }
    };

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new product</h3>
            <label>Product Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Price:</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <label>Image src</label>
            <input
                type="text"
                onChange={(e) => setImg(e.target.value)}
                value={img}
            />
            <label>Category:</label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <label>Restaurant:</label>
            <input
                type="text"
                onChange={(e) => setRestaurant(e.target.value)}
                value={restaurant}
            />
            <label>Restaurant Image:</label>
            <input
                type="text"
                onChange={(e) => setRestaurantImage(e.target.value)}
                value={restaurantImage}
            />
            <label>Restaurant Ratings:</label>
            <input
                type="number"
                onChange={(e) => setRestaurantRate(e.target.value)}
                value={restaurantRate}
            />
            <button>Add Product</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};

export default ProductForm;
