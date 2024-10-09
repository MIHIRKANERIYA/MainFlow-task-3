import React from 'react';
import '../styles/card.css'; 

const Card = ({ title, poster, year }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Card;
