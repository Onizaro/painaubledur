import React, { useEffect } from 'react';
import './App.css';
import { produits } from './Produits.js';
import Carte from './Carte.js';
import Titre from './Titre.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Titre />
      <p id='box-title'>Les Bests Sellers</p>
      <div id="cartes">
        {produits.map((produit, index) => (
          <Carte key={index} objet={produit} />
        ))}
      </div>
      
      <div className="glow" />
    </div>
  );
}

export default App;
