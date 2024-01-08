import useFetch from './useFetch';

export const useFetchCategories = () =>
  useFetch('https://fakestoreapi.com/products/categories');

export const useFetchProducts = (selectedCategory) =>
  selectedCategory
    ? useFetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    : useFetch('https://fakestoreapi.com/products');

export const useFetchProductDetails = (productId) =>
  useFetch(`https://fakestoreapi.com/products/${productId}`);
