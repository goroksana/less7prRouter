import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Biography from './Biography';
import FamousPaintings from './FamousPaintings';
import Gallery from './Gallery';
import PaintingDetail from './PaintingDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/famous-paintings" element={<FamousPaintings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/painting/:id" element={<PaintingDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
