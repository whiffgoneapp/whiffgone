import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "WhiffGone Classic",
      price: 15,
      image: "https://via.placeholder.com/300x300?text=Classic",
      description: "Classic scent, neutralizes odor quickly. Perfect after smoking.",
    },
    {
      id: 2,
      name: "WhiffGone Fresh",
      price: 18,
      image: "https://via.placeholder.com/300x300?text=Fresh",
      description: "Fresh and clean aroma that fades fast yet impresses instantly.",
    },
    {
      id: 3,
      name: "WhiffGone Cool",
      price: 20,
      image: "https://via.placeholder.com/300x300?text=Cool",
      description: "Cool twist with modern scent for urban lifestyle.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const addToCart = () => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={() => navigate("/products")}>← Back to Products</button>
      </div>
    </div>
  );
}

export default ProductDetail;
