import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test-api.fusion-tech.pro/api/v1",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("API_AUTHORIZATION_TOKEN");

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };

  return config;
});

axiosInstance.interceptors.response.use((response) => {
  const token = response.data.token || response.data.user?.token;
  if (typeof token === "string") {
    localStorage.setItem("API_AUTHORIZATION_TOKEN", token);
  }

  return response;
});

export default axiosInstance;
