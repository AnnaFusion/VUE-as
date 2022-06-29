import axios from "axios";
import setTokens from "../utils/setTokens";
import { refreshAccessToken } from "./authorization";
import router from "../router";

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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.__isRetryReques &&
      error.config.url !== "/auth/refresh-token"
    ) {
      console.log("refreshing");
      error.config.__isRetryRequest = true;
      const token = localStorage.getItem("API_REFRESH_TOKEN");
      const tokensData = await refreshAccessToken({ token });
      setTokens(tokensData.data.data.tokens);
      return axiosInstance(originalRequest);
    }
    if (error.response.status === 401) {
      router.replace({ name: "home" });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
