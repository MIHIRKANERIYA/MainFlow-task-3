import React, { useEffect, useState } from 'react';
import Card from './Card'; // Ensure correct path to Card component
import '../styles/home.css'; // Ensure correct path to CSS
import Header from './Header';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call to fetch multiple movies
    const fetchMovies = async () => {
        const movieIds = ['tt3896198', 'tt0111161', 'tt0068646', 'tt1375666', 'tt0109830', 'tt0468569', 'tt0137523', 'tt0120737', 'tt0317248', 'tt0816692']; // Example movie IDs
      const movieData = await Promise.all(
        movieIds.map(async (id) => {
          const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=a59b36b6`);
          return response.json();
        })
      );
      setMovies(movieData); // Set the fetched movie data to state
    };

    fetchMovies();
  }, []);

  return (
    <div>
        <Header />
    <div className="home-grid">
      {movies.map((movie, index) => (
        <Card
          key={index}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        />
      ))}
    </div>
    </div>
  );
};

export default Home;
