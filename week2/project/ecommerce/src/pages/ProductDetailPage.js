import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/dataService';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <header className="App-header">
        <h2>{product.title}</h2>
      </header>
      <div className="product-detail">
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
    </>
  );
}

export default ProductDetailPage;
