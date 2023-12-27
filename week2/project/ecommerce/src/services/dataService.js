import useFetch from './useFetch';

export const fetchCategories = () =>
  useFetch('https://fakestoreapi.com/products/categories');

export const fetchProducts = (selectedCategory) =>
  selectedCategory
    ? useFetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    : useFetch('https://fakestoreapi.com/products');

export const fetchProductDetails = (productId) =>
  useFetch(`https://fakestoreapi.com/products/${productId}`);
