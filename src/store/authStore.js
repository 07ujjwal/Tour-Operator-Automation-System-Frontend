import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  setAuth: ({ user, token }) => {
    // console.log("Setting user in localStorage:", user);
    if (!user || !token) {
      console.error("Invalid user or token:", { user, token });
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },
  clearAuth: () => {
    console.log("Clearing user and token from localStorage");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
