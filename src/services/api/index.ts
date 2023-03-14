import axios from "axios";

export const API_URL = process.env.ENABLE_MOCK_API
  ? "https://localhost:3000/api"
  : /* istanbul ignore next */
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
