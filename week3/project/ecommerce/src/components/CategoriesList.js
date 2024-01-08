import React from 'react';
import { CategoryItem } from './CategoryItem';
import useFetch from '../services/useFetch';

function CategoriesList({ handleClick, selectedCategory }) {
  const url = 'https://fakestoreapi.com/products/categories';
  const { data: categories, loading, error } = useFetch(url);

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
