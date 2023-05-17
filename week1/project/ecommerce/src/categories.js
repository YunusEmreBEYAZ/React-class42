import allCategories from "./fake-data/all-categories.js";
import allProducts from "./fake-data/all-products.js";
import { useState } from 'react';


export default function Categories() {
    const [selectedCategory, setCategory] = useState("all");
    const handleCategory = (categoryName) => {
        setCategory(categoryName)
    };


    const filteredProducts =
        selectedCategory === "all"
            ? allProducts
            : allProducts.filter((product) => product.category === selectedCategory.slice(6));


    return (
        <div>
            <div className="category-btn">
                {allCategories.map((category) => (
                    <button key={category.name} onClick={() => handleCategory(category.name)}>
                        {category.name}
                    </button>
                ))}
            </div>
            <ul className="all-products">{filteredProducts.map((product) => (
                <li key={product.id} className="product">
                    <img src={product.image} alt={product.title} width={250} height={300} />
                    <p>{product.title}</p>
                </li>
            ))}</ul>
        </div>

    )

}

