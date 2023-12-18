const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchCategories = () =>
  fetchData('https://fakestoreapi.com/products/categories');
export const fetchProducts = (selectedCategory) =>
  selectedCategory
    ? fetchData(
        `https://fakestoreapi.com/products/category/${selectedCategory}`,
      )
    : fetchData('https://fakestoreapi.com/products');
export const fetchProductDetails = (productId) =>
  fetchData(`https://fakestoreapi.com/products/${productId}`);
