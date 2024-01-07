import React from 'react';
import { CategoryItem } from './CategoryItem';
import { fetchCategories } from '../services/dataService';

function CategoriesList({ handleClick, selectedCategory }) {
  const { data: categories, loading, error } = fetchCategories();

  return (
    <>
      <header className="App-header">
        <h1>Products</h1>
      </header>
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
