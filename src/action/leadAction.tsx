import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken } from "@/utils/helper";

export const fetchLeadsLists = async (params: any) => {
  try {
    const response = await api.post(API_ENDPOINTS.getLeadsLists, params, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      timeout: 15000 // 15-second timeout
    });

    // Handle non-200 responses
    if (response.status !== 200) {
      throw new Error(`Server returned ${response.status}`);
    }

    // Handle business logic errors
    if (response.data?.responseCode !== "0") {
      return []; // Consider throwing an error here instead
    }

    return response.data.data || []; // Ensure always returning array
  } catch (error: any) {
    // Normalize all errors
    const normalizedError = new Error(
      error.response?.data?.message || 
      error.message || 
      "Failed to fetch leads"
    );
    throw normalizedError;
  }
};
export const fetchFallowupDetails = async (param: any) => {
  debugger;
  try {
    const response = await api.post(API_ENDPOINTS.GetFollowupDetails, param, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (response.data.responseCode !== "0") {
      return [];
    }

    return response.data.data;
  } catch (error) {
    throw error; // Let TanStack Query handle the error
  }
};
