import React from 'react';
import { useParams } from 'react-router-dom';

function PaintingDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Painting Details</h2>
      <p>Details for painting with ID: {id}</p>
    </div>
  );
}

export default PaintingDetail;
