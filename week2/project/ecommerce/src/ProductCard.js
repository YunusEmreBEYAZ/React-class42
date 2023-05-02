import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="product">
            <Link to={`/product/${product.id}`}>
                <img className="card-image" src={product.image} alt={product.title} width={250} height={250} />
                <h3>{product.title}</h3>

            </Link>
        </div>
    );
}

export default ProductCard;