import http from "src/core";
import endpoints from "./endpoints";
import { GetExampleDataResponse } from "src/types/network/response";

export const getExampleData = (): GetExampleDataResponse => {
  return http.get(endpoints?.getExampleRequest);
};
