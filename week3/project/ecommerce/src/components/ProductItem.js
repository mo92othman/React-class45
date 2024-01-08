import React from 'react';
import { Link } from 'react-router-dom';
import Heart from './Heart';
import { useFavorites } from '../contexts/FavoritesContext';

export const ProductItem = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorited = favorites.includes(product.id);

  const handleHeartClick = () => {
    if (isFavorited) {
      // Remove the product id from favorites
      removeFromFavorites(product.id);
    } else {
      // Add the product id to favorites
      addToFavorites(product.id);
    }
  };

  return (
    <>
      <li className="product-item">
        <div className="heart-wrapper">
          <Heart onHeartClick={handleHeartClick} isFavorited={isFavorited} />
        </div>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </Link>
      </li>
    </>
  );
};
