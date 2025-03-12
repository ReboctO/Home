import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5156/api/auth";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error("Registration failed", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    console.error("Login failed", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
