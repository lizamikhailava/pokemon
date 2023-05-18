import axios from "axios";
import { API_TIMEOUT, BASE_URL } from "../utils/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});
