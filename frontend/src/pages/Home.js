// Home.js

import React, { useEffect, useState } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import ProductDetails from '../components/ProductDetails';
import ProductForm from '../components/ProductForm';
import './Home.css'; // Import CSS file

const Home = () => {
    const { products, dispatch } = useProductsContext();
    const { user } = useAuthContext();
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            // Fetching data
            const response = await fetch('/api/products', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: json });
            }
        };
        if (user) {
            fetchProducts();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, user]); // Include dispatch in the dependency array

    const prevPage = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 6);
        }
    };

    const nextPage = () => {
        if (startIndex + 6 < products.length) {
            setStartIndex(startIndex + 6);
        }
    };

    return (
        <div className='home'>
            <div className='navigation-buttons'>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
            <div className='product-container'>
                {/* Displaying the fetched data */}
                {products && products.slice(startIndex, startIndex + 6).map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
            <ProductForm />
        </div>
    );
};

export default Home;
