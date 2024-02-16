import React from "react";
import { useAppContext } from "../AppProvider";
import "../style/header.css";

export default function Header() {
  const { cart } = useAppContext();
  return (
    <header className="header">
      <h1>Intermarché : tous unis contre la vie</h1>
      <div>{cart.length}</div>
    </header>
  );
}
