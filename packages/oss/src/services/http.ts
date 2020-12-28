import axios from "axios";
import { authRequest, authResponse } from "./interceptors";

const url = "http://localhost:5000";

export const http = axios.create({
  baseURL: url,
});

http.interceptors.request.use(authRequest);
http.interceptors.response.use(...authResponse);
