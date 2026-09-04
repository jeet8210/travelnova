import axios from "axios";

const api = axios.create({ baseURL: "/api" });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getDestinations = (featured) =>
  api.get(`/destinations${featured ? "?featured=true" : ""}`);
export const getDestinationById = (id) => api.get(`/destinations/${id}`);

export const getPackages = () => api.get("/packages");
export const getPackageById = (id) => api.get(`/packages/${id}`);

export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const getProfile = () => api.get("/auth/profile");

export const createBooking = (data) => api.post("/bookings", data);
export const getMyBookings = () => api.get("/bookings/my");

export default api;
