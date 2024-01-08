import React from 'react';
import { ProductItem } from './ProductItem';
import useFetch from '../services/useFetch';

function ProductsList({ selectedCategory }) {
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products';
  const { data: products, loading, error } = useFetch(url);

  return (
    <>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error loading products</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductsList;
