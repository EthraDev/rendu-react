import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return <header>
    <h1>Intermarché : tous unis contre la vie</h1>
  </header>
}

export default function HomeScreen() {

  return (
    <div>
      <header>
        <Header />
      <Link to="/products">Voir les produits</Link>
      </header>
    </div>
  );
}