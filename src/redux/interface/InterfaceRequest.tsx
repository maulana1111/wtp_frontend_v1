import { AxiosRequestConfig } from "axios";

export interface RequestOptions {
  method: "GET" | "GET_RESTRICT" | "POST" | "PATCH" | "DELETE";
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
}
