import React, { useState, useEffect } from 'react';
import { CategoryItem } from './CategoryItem';
import { fetchCategories } from '../services/dataService';

function CategoriesList({ handleClick, selectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategoriesData();
  }, []); // Empty dependency array to fetch data only once on mount

  return (
    <>
      <header className="App-header">
        <h1>Products</h1>
      </header>
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
