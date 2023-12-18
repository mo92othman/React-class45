import React from 'react';
import { CategoryItem } from './CategoryItem';

function CategoriesList({ categories, handleClick, selectedCategory }) {
  return (
    <>
      <ul className="list">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            handleClick={handleClick}
            selectedCategory={selectedCategory}
          />
        ))}
      </ul>
    </>
  );
}

export default CategoriesList;
