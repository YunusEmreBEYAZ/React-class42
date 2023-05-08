import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";

function FavoritesList() {
    const { favorites } = useContext(ProductContext);

    return (
        <div className="products">
            <div className="title-container">
                <h1 className="title-container-title">Favorites</h1>
                <div className="title-container-navbar">
                    <Link to={"/"} className="navbar-link">Products</Link>
                    <Link to={`/favorites`} className="navbar-link">Favorites</Link>
                </div>
            </div>

            {favorites.length === 0 ? (
                <p>You don't have any favorite products yet.</p>
            ) : (
                <ul className="categories">
                    {favorites.map((product) => (
                        <ProductCard key={product.id} product={product} className="product" />
                    ))}
                </ul>
            )}
        </div>
    );
}
export default FavoritesList
