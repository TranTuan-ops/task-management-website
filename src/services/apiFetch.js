import { USE_MOCK_API } from "../constants/api.constants.js";

export async function apiFetch(url, options) {
  if (USE_MOCK_API) {
    const { mockFetch } = await import("./mockFetch.js");
    return mockFetch(url, options);
  }

  return fetch(url, options);
}
