import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <h2>Michelangelo's Gallery</h2>
      <p>Explore a collection of Michelangelo's paintings.</p>
      <ul>
        <li><Link to="/painting/1">Painting 1</Link></li>
        <li><Link to="/painting/2">Painting 2</Link></li>
      </ul>
    </div>
  );
}

export default Gallery;
