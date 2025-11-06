import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { ApiPaths } from "./schema";
import { CONFIG } from "../config/env";

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
  credentials: "include",
});
export const rqClient = createClient(fetchClient);

export const publicFetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
  credentials: "include",
});
export const publicRqClient = createClient(publicFetchClient);
