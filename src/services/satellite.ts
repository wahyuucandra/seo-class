import { envClient } from "@/helpers/environments/env";
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
