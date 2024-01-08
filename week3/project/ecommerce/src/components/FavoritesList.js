import React from 'react';
import { ProductItem } from './ProductItem';
import { useFavorites } from '../contexts/FavoritesContext';
import useFetch from '../services/useFetch';

function FavoritesList() {
  const { favorites } = useFavorites();

  return (
    <>
      {favorites.length === 0 ? (
        <h2>No favorite items yet.</h2>
      ) : (
        <ul className="product-list">
          {favorites.map((productId) => (
            <FavoriteProductItem key={productId} productId={productId} />
          ))}
        </ul>
      )}
    </>
  );
}

const FavoriteProductItem = ({ productId }) => {
  const url = `https://fakestoreapi.com/products/${productId}`;
  const { data: product, loading, error } = useFetch(url);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>Error loading product details</p>;
  }

  return <ProductItem product={product} />;
};

export default FavoritesList;
