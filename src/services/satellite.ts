import { envClient } from "@/utils/environments";
import axios from "axios";

const satellite = axios.create({
  baseURL: envClient.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

satellite.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default satellite;
