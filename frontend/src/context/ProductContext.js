// productContext.js
import { createContext, useReducer } from 'react';

export const ProductsContext = createContext();

export const productReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'CREATE_PRODUCTS':
            return {
                ...state,
                products: [action.payload, ...state.products]
            };
        case 'UPDATE_PRODUCTS':
            return {
                ...state,
                products: state.products.map(product => 
                    product._id === action.payload._id ? action.payload : product
                )
            };
        case 'DELETE_PRODUCTS':
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload._id)
            };
        default:
            return state;
    }
};

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, {
        products: null
    });

    return (
        <ProductsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};
