import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../services/API";

export default function ProductScreen() {
    const { productId } = useParams();
    let { data, isLoading, isFetching, isError} = useGetProductsQuery();
    return (
        <div className="App">
        <header className="App-header">
            <h1>Product : {productId}</h1>
            {
            !isLoading ?
                data.filter((product) => product.id === productId).map((product, index) => {
                return <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.content}</p>
                    <p>{product.price}€</p>
                    <img src={product.image}></img>
                </div>
                }) :
            <p>Loading...</p>
            }
        </header>
        </div>
    );
}