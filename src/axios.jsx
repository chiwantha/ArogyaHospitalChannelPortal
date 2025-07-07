import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://portal.arogyahospitals.lk/server",
  withCredentials: true,
});
