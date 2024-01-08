import React from 'react';
import { ProductItem } from './ProductItem';
import { useFavorites } from '../contexts/FavoritesContext';
import { useFetchProductDetails } from '../services/dataService';

function FavoritesList() {
  const { favorites } = useFavorites();
  console.log(favorites);

  return (
    <>
      {favorites.length === 0 ? (
        <p>No favorite items yet.</p>
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
  const { data: product, loading, error } = useFetchProductDetails(productId);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>Error loading product details</p>;
  }

  return <ProductItem product={product} />;
};

export default FavoritesList;
