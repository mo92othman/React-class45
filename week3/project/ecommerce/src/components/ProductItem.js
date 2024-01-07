import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <li className="product-item" onClick={handleClick}>
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
      </li>
    </>
  );
};
