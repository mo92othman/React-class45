import React from 'react';
import { ProductItem } from './ProductItem';
import { useFetchProducts } from '../services/dataService';

function ProductsList({ selectedCategory }) {
  const { data: products, loading, error } = useFetchProducts(selectedCategory);

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
