import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const getApiErrorMessage = (error) =>
  error.response?.data?.message ||
  (error.request
    ? "The server could not be reached. Please try again."
    : "Something went wrong. Please try again.");

export default api;
