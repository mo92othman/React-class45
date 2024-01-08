import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../services/useFetch';

function ProductDetailPage() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      {loading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p>Error loading product details</p>
      ) : !product ? (
        <p>Product not found</p>
      ) : (
        <>
          <header className="App-header">
            <h1>{product.title}</h1>
          </header>
          <div className="product-detail">
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetailPage;
