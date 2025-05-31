import axios from 'axios';

export const fetchProductData = async () => {
  const api = 'https://fakestoreapi.com/products';
  try {
    const response = await axios.get(api);
    return response?.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
export const fetchCategoryData = async () => {
  const api = 'https://fakestoreapi.com/products/categories';
  try {
    const response = await axios.get(api);
    return response?.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
export const fetchEachCategoryData = async product => {
  const api = `https://fakestoreapi.com/products/category/${product}`;

  try {
    const response = await axios.get(api);
    return response?.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
