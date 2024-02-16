import React from "react";
import "../style/product.css";

export default function Product(props) {
  return (
    <div className="product" key={props.id}>
      <img className="image" src={props.image} alt={props.title}></img>
      <div className="base">
        <h1 className="title">{props.title}</h1>
        <p className="price">{props.price}€</p>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
}
