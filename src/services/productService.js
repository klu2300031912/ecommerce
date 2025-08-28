import axios from "axios";

// ✅ Set your backend URL here (only one)
const API_BASE_URL = "http://localhost:9090/back1/api/products";
// OR use the 8080 version if needed
// const API_BASE_URL = "http://localhost:8080/api/products";

/**
 * ✅ Fetch products by category
 * @param {string} category - product category (optional)
 * @returns {Promise<Array>} - Array of product objects
 */
export const getProducts = async (category = "") => {
  try {
    const url = category ? `${API_BASE_URL}?category=${category}` : API_BASE_URL;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array instead of throwing to prevent app crash
  }
};

/**
 * ✅ Get product image URL
 * @param {string} imagePath - image file name or path
 * @returns {string} - Full image URL
 */
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
