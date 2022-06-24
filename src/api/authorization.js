import axios from "./axios";

export const login = (loginForm) => {
  const loginUrl = "/auth/sign-in";
  return axios.post(loginUrl, loginForm);
};

export const tokenAuth = () => {
  const tokenAuthUrl = "/auth/me";
  return axios.get(tokenAuthUrl);
};
