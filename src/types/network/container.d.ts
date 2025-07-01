import { AxiosError, AxiosResponse } from "axios";

export interface APIMeta {
  message: string;
  code: number;
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  meta: APIMeta;
}

export interface APIError {
  message: string;
  type: string;
}

export type HttpResponse<T> = Promise<AxiosResponse<ApiResponse<T>>>;

export type AxiosHTTPError = AxiosError<APIError>;

/**
 * API source types
 */
export type API_SOURCE = "api" | "cms";

/**
 * Endpoint configuration type
 */
export type EndpointConfig = {
  endpoint: string;
  source: API_SOURCE;
};

/**
 * Endpoint source mapping type
 */
export type ENDPOINT_SOURCE = {
  [key: string]: EndpointConfig;
};
