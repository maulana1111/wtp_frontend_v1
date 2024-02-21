import axios, { AxiosError } from "axios";
import { RequestOptions } from "./interface/InterfaceRequest";

const API_BASE_URL: string = process.env.REACT_APP_BASE_URL || "";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token.replace(/"/g, "")}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
  }

  return config;
});

const RequestData = ({
  method,
  url,
  data,
  config,
}: RequestOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      switch (method) {
        // GET TANPA TOKEN
        case "GET":
          api
            .get(url, { params: data })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        // GET DENGAN TOKEN
        case "GET_RESTRICT":
          api
            .get(url, { ...config, params: data })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "POST":
          api
            .post(url, data, config)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "PATCH":
          api
            .patch(url, data, config)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "DELETE":
          api
            .delete(url, { ...config, params: data })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      if (
        axios.isAxiosError(axiosError) &&
        axiosError.response &&
        axiosError.response.status === 401
      ) {
        window.location.href = "/login";
      } else {
        reject(new Error(axiosError.message));
      }
    }
  });
};

export default RequestData;
