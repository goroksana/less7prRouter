import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Michelangelo App</h1>
      <p>Explore the life and works of Michelangelo.</p>
      <ul>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/famous-paintings">Famous Paintings</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </div>
  );
}

export default Home;
