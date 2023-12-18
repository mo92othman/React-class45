import './App.css';
import ProductsList from './components/ProductsList';
import CategoriesList from './components/CategoriesList';
import { useState, useEffect } from 'react';
function App() {
  // State for categories and products
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint URLs
  const categoriesUrl = 'https://fakestoreapi.com/products/categories';
  const productsUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products';

  // Fetch categories and products on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesUrl);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError('Error fetching categories');
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch(productsUrl);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [categoriesUrl, productsUrl, selectedCategory]);

  // Function to handle category selection
  const handleClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Render loading or error messages
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <main>
        <CategoriesList
          categories={categories}
          selectedCategory={selectedCategory}
          handleClick={handleClick}
        />
        <ProductsList products={products} />
      </main>
    </div>
  );
}

export default App;
