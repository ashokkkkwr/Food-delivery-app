import React, { useState, useEffect } from 'react';
import './Category1.css';

export default function Category1() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 6;

  useEffect(() => {
    // Fetch product data from your backend API
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data); // Update products state with fetched data
    } catch (error) {
      console.error('Error fetching products:', error.message);
      // Handle error
    }
  };

  const handleNext = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - productsPerPage >= 0) {
      setStartIndex(startIndex - productsPerPage);
    }
  };

  return (
    <div>
      <div className='third_nav'>
        <p>Order.uk most Popular Products 🤩</p>
      </div>
      <div className='cart-layout'>
        {/* Map through only the first 6 products and render each product's image and name */}
        {products.slice(startIndex, startIndex + productsPerPage).map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.img} alt={`Product ${index}`} />
            <p>{product.name}</p>
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
