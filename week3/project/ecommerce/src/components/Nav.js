// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="App-header">
      <div>
        <h1>Products</h1>
      </div>
      <div className="header-nav">
        <Link to="/">Products</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Nav;
