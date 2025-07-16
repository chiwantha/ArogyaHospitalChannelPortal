import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: "https://portal.arogyahospitals.lk/server",
  baseURL: "http://192.168.8.101:8800/server",
  withCredentials: true,
});
