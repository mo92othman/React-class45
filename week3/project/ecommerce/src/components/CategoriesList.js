import React from 'react';
import { CategoryItem } from './CategoryItem';
import { useFetchCategories } from '../services/dataService';

function CategoriesList({ handleClick, selectedCategory }) {
  const { data: categories, loading, error } = useFetchCategories();

  return (
    <>
      <ul className="list">
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p>Error loading categories</p>
        ) : (
          categories.map((category) => (
            <CategoryItem
              key={category}
              category={category}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default CategoriesList;
