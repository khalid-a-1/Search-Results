import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";

// Function to fetch funds based on a search term
export const fetchFunds = async (term) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/funds`, {
      params: { term },
    });
    console.log("aaa", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching funds:", error);
    throw error;
  }
};
