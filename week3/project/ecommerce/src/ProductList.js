import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import CategoryButton from "./CategoryButton";
import { Link } from "react-router-dom";


function ProductList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setIsLoading(true);
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    setIsLoading(false);
                })
                .catch((error) => console.log(error));
        } else {
            setIsLoading(false);
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((error) => console.log(error));
        }
    }, [selectedCategory]);

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    return (
        <div>
            <div className="title-container">
                <h1 className="title-container-title">Products</h1>
                <div className="title-container-navbar">
                    <Link to={"/"} className="navbar-link">Products</Link>
                    <Link to={`/favorites`} className="navbar-link">Favorites</Link>
                </div>
            </div>
            <div className="categories">
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        category={category}
                        onClick={handleCategoryClick}
                        active={category === selectedCategory}
                    />
                ))}
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul className="categories">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} className="product" />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;