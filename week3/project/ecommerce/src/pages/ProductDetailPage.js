import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Nav from '../components/Nav';

function ProductDetailPage() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <Nav />
      {loading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p>Error loading product details</p>
      ) : !product ? (
        <p>Product not found</p>
      ) : (
        <>
          <header className="product-title">
            <h3>{product.title}</h3>
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
