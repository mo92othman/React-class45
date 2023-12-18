import React, { useState, useEffect } from 'react';
import { ProductItem } from './ProductItem';
import { fetchProducts } from '../services/dataService';

function ProductsList({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts(selectedCategory);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProductsData();
  }, [selectedCategory]); // Fetch when selectedCategory changes

  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
