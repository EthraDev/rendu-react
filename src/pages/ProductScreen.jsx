import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../services/API";
import Product from "../components/product";
import { useAppContext } from "../AppProvider";

export default function ProductScreen() {
    const { productId } = useParams();
    let { data, isLoading, isFetching, isError} = useGetProductsQuery();
    const { cart, setCart } = useAppContext();

  function addCart() {
    if (cart.includes(productId)) return;
    setCart([...cart, productId]);
  }

    return (
        <main className="App">
            <div className="App-header">
                <h1>Product : {productId}</h1>
                {!isLoading ? (
                data
                .filter((product) => product.id === productId)
                .map((product, index) => {
                return (
                    /*<div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.content}</p>
                    <p>{product.price}€</p>
                    <img src={product.image} alt={product.title}></img>
                    </div>*/
                    <Product
                    key={index}
                    id={product.id}
                    title={product.title}
                    content={product.content}
                    price={product.price}
                    image={product.image}
                    />
                    );
                })
                ) : (
                    <p>Loading...</p>
                )}
                <h2>Comments</h2>
                <p>Comments for product {productId}</p>
                <button onClick={addCart}>Add to cart</button>
            </div>
        </main>
    );
}