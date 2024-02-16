import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetProductsQuery } from "../services/API";

function Header() {
    return <header>
      <h1>Intermarché : tous unis contre la vie</h1>
    </header>
  }

export default function ProductsScreen() {
    let { data, isLoading, isFetching, isError} = useGetProductsQuery();
        
    return (
        <div className="App"> 
        <header className="App-header">
          <Header />
        {
          !isLoading ?
            data.map((product, index) => {
              return <Link to={`/products/${product.id}`}><div key={product.id}>
                <h1>{product.title}</h1>
                <p>{product.content}</p>
                <p>{product.price}€</p>
                <img src={product.image}></img>
              </div>
              </Link>
            }) :
          <p>Loading...</p>
        }
        
        </header>
      </div>
    );
}

const Container = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;