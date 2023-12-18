import React, { useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
      <CategoriesList
        handleClick={handleClick}
        selectedCategory={selectedCategory}
      />
      <ProductsList selectedCategory={selectedCategory} />
    </>
  );
}

export default ProductsPage;
