import axios from "axios";
import useAuthStore from "../store/authStore";

const api = axios.create({
  baseURL: "https://tour-operator-automation-system-api.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    console.log("Authorization token:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.getState().clearAuth();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const login = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);
    const {
      token,
      data: { user },
    } = response.data;

    // console.log("User from API:", user);

    if (!user || !token) {
      throw new Error("Invalid user or token received from API");
    }
    useAuthStore.getState().setAuth({ user, token });
    console.log("Auth state after setting:", useAuthStore.getState());
    return response.data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const response = await api.post("/users/signup", credentials);
    const {
      token,
      data: { user },
    } = response.data;

    if (!user || !token) {
      throw new Error("Invalid user or token received from API");
    }
    useAuthStore.getState().setAuth({ user, token });
    return response.data;
  } catch (error) {
    console.error("Error during signup request:", error);
    throw error;
  }
};

export default api;
