import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    function addToFavorites(product) {
        setFavorites([...favorites, product]);
    }

    function removeFromFavorites(product) {
        const newFavorites = favorites.filter((item) => item.id !== product.id);
        setFavorites(newFavorites);
    }

    const contextValues = {
        products,
        setProducts,
        favorites,
        addToFavorites,
        removeFromFavorites,
    };

    return (
        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    );
}