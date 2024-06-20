import axios from "axios";

const api = axios.create({
  baseURL: "https://tour-operator-automation-system-api.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const response = await api.post("/users/sighup", credentials);
    return response.data;
  } catch (error) {
    console.error("Error during signup request:", error);
    throw error;
  }
};

export default api;
