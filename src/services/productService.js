import axios from "axios";

// ✅ Set your backend URL here (only one)
const API_BASE_URL = "http://localhost:9090/back1/api/products";
// OR if your backend is running at port 8080, use:
// const API_BASE_URL = "http://localhost:8080/api/products";

// ✅ Fetch products by category
export const getProducts = async (category = "") => {
  try {
    const url = category ? `${API_BASE_URL}?category=${category}` : API_BASE_URL;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// ✅ Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
