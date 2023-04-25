import allProducts from './fake-data/all-products.js';

export default function AllProducts() {
    return (
        <ul className="all-products">
            {allProducts.map((product) => (
                <li key={product.id} className="product">
                    <img src={product.image} alt={product.title} width={250} height={300} />
                    <p>{product.title}</p>
                </li>
            ))}
        </ul>
    );
}