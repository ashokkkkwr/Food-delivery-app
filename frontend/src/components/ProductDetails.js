import { useState } from 'react';
import { useProductsContext } from "../hooks/useProductsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import './ProductDetails.css'

const ProductDetails = ({ product }) => {
    const { dispatch } = useProductsContext();
    const { user } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleUpdate = async () => {
        if (!user) {
            return;
        }

        try {
            const response = await fetch(`/api/products/${product._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(updatedProduct)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedData = await response.json();
            dispatch({ type: 'UPDATE_PRODUCTS', payload: updatedData });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating product:', error.message);
            // Handle error
        }
    };

    const handleDelete = async () => {
        if (!user) {
            return;
        }

        try {
            const response = await fetch(`/api/products/${product._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            dispatch({ type: 'DELETE_PRODUCTS', payload: product }); // Assuming payload needs to be the product itself
        } catch (error) {
            console.error('Error deleting product:', error.message);
            // Handle error
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    return (
        <div className="product-card">
            {!isEditing ? (
                <>
                    <h4>{product.name}</h4>
                    <p><strong>Price($):</strong> {product.price}</p>
                    <img className="product-image" src={product.img} alt="Product Image" />
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Restaurant:</strong> {product.restaurant}</p>
                   
                    <p><strong>RestaurantRating:</strong> {product.restaurantRate}</p>
                    
                    <div className='edits'>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="text" name="price" value={updatedProduct.price} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="img">Image:</label>
                        <input type="text" name="img" value={updatedProduct.img} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <input type="text" name="category" value={updatedProduct.category} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="restaurant">Restaurant:</label>
                        <input type="text" name="restaurant" value={updatedProduct.restaurant} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="restaurantImage">Restaurant Image:</label>
                        <input type="text" name="restaurantImage" value={updatedProduct.restaurantImage} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="restaurantRate">Restaurant Ratings:</label>
                        <input type="number" name="restaurantRate" value={updatedProduct.restaurantRate} onChange={handleChange} />
                    </div>
                    <div>
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
