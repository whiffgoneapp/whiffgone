import React from "react";
import "./Products.css";

const PRODUCTS = [
  { id: 1, name: "WhiffGone Classic", price: 15 },
  { id: 2, name: "WhiffGone Fresh", price: 18 },
  { id: 3, name: "WhiffGone Cool", price: 20 },
];

const Products = ({ cart, setCart }) => {
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="products-container">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Fragrances</h2>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;










