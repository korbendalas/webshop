import axios from "axios";
import { authRequest, authResponse } from "./interceptors";

export const API_URL = "http://localhost:5000";

export const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use(authRequest);
http.interceptors.response.use(...authResponse);
