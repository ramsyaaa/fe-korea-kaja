import httpRequest, { apiDelete, get, post, patch } from "./http-request";

export { httpRequest };

const http = {
  delete: apiDelete,
  get,
  post,
  patch,
};

export default http;
