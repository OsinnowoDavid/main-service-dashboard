import { decryptData } from "@/utils/crypt";
import axios, { AxiosInstance } from "axios";

const getToken = (): string | null => {
  return decryptData(sessionStorage.getItem("auth") || "null")?.token;
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log(token);
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
