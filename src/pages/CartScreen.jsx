import React from "react";
import { useState } from "react";
import Product from "../components/product";
import "../style/productScreen.css";

export default function CartScreen() {

    const [cart, setCart] = useState([]);

    function removeFromCart(productId) {
        setCart(cart.filter(product => product !== productId));
    }
    
  return (
    <div>
        {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(productId => (
            <li key={productId}>
                <Product
                title={productId.title}
                content={productId.content}
                price={productId.price}
                image={productId.image}
                />
              <span>Product ID: {productId}</span>
              <button onClick={() => removeFromCart(productId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
