import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import FavoritesList from "./FavoritesList.js";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;