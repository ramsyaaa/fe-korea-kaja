import { useQuery } from "react-query";
import { GET_EXAMPLE_REQUEST } from "./query-keys";
import { getExampleData } from "./services";

export const useFetchExampleRequest = (enabled: boolean) => {
  return useQuery([GET_EXAMPLE_REQUEST], getExampleData, {
    enabled,
  });
};
