import axios, { AxiosRequestConfig } from "axios";
import { AxiosHTTPError } from "src/types/network/container";
import { BASE_API_URL } from "./env";
import { serializeParam } from "src/utils";

/**
 * Create axios instance with default configuration
 */
const httpRequest = axios.create({
  timeout: 30000,
});

/**
 * Request interceptor handler
 */
const requestHandler = async (requestConfig: any) => {
  return requestConfig;
};

/**
 * Error interceptor handler
 */
const errorHandler = (error: AxiosHTTPError) => {
  return Promise.reject({
    statusCode: error.response?.status,
    message: JSON.stringify(error?.response?.data),
  });
};

// Apply interceptors
httpRequest.interceptors.request.use(
  (request: any) => requestHandler(request),
  (error: AxiosHTTPError) => errorHandler(error),
);

/**
 * Generate base URL based on API source
 */
const generateBaseURL = (url: string) => {
  return `${BASE_API_URL}${url}`;
};

/**
 * Build complete URL with query parameters
 */
const buildUrl = (endpoint: string, queryParam: Record<string, any>) => {
  let url = generateBaseURL(endpoint);
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  return url;
};

/**
 * Handle HTTP GET requests
 */
export const get = <T = any>(
  endpoint: string,
  queryParam: Record<string, any> = {},
  config?: AxiosRequestConfig,
) => {
  const url = buildUrl(endpoint, queryParam);

  const requestConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config?.headers,
      "content-type": "application/json",
    },
  };

  return httpRequest.get<T>(url, requestConfig);
};

/**
 * Handle HTTP POST requests
 */
export const post = <T = any>(
  endpoint: string,
  bodyParam?: Record<string, any>,
  queryParam: Record<string, any> = {},
  config?: AxiosRequestConfig,
) => {
  const url = buildUrl(endpoint, queryParam);

  const requestConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config?.headers,
    },
  };

  return httpRequest.post<T>(url, bodyParam, requestConfig);
};

/**
 * Handle HTTP DELETE requests
 * Note: We use 'apiDelete' instead of 'delete' as the function name since 'delete' is a reserved keyword
 */
export const apiDelete = <T = any>(
  endpoint: string,
  bodyParam?: Record<string, any>,
  queryParam: Record<string, any> = {},
  config?: AxiosRequestConfig,
) => {
  const url = buildUrl(endpoint, queryParam);

  const requestConfig: AxiosRequestConfig = {
    ...config,
    data: bodyParam,
    headers: {
      ...config?.headers,
    },
  };

  return httpRequest.delete<T>(url, requestConfig);
};

/**
 * Handle HTTP PATCH requests
 */
export const patch = <T = any>(
  endpoint: string,
  bodyParam?: Record<string, any>,
  queryParam: Record<string, any> = {},
  config?: AxiosRequestConfig,
) => {
  const url = buildUrl(endpoint, queryParam);

  const requestConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config?.headers,
    },
  };

  return httpRequest.patch<T>(url, bodyParam, requestConfig);
};

export default httpRequest;
