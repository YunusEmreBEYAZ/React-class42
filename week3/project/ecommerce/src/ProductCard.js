import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import heartRegular from "./assets/heart-regular.svg"
import heartSolid from "./assets/heart-solid.svg"


function ProductCard({ product }) {
    const { addToFavorites, removeFromFavorites, favorites } = useContext(ProductContext);

    function handleClick(product) {
        if (favorites.find((item) => item.id === product.id)) {
            removeFromFavorites(product);
        } else {
            addToFavorites(product);
        }
    }

    return (
        <div className="product">
            <div className="fav-icons">
                {favorites.find((item) => item.id === product.id) ? (
                    <img
                        src={heartSolid}
                        alt="Remove from favorites"
                        onClick={() => handleClick(product)}
                        width="20px"
                    />
                ) : (
                    <img
                        src={heartRegular}
                        alt="Add to favorites"
                        onClick={() => handleClick(product)}
                        width="20px"
                    />
                )}
            </div>
            <div>
                <Link to={`/product/${product.id}`}>
                    <img
                        className="card-image"
                        src={product.image}
                        alt={product.title}
                        width={250}
                        height={250}
                    />
                    <p>{product.title}</p>
                </Link>
            </div>

        </div>
    );
}

export default ProductCard;