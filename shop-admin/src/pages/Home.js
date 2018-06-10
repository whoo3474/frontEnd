import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/cart">Go to Cart</Link>
    </div>
  )
};

export default Home;