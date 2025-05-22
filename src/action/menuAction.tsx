import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken } from "@/utils/helper";

export const fetchMenuMappedLists = async (param: any) => {
  debugger;
  try {
    const response = await api.post(API_ENDPOINTS.GetUserRoleMapping, param, {
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


export const fetchRoleLists = async (param: any) => {
  debugger;
  try {
    const response = await api.post(API_ENDPOINTS.GetRoleList, param, {
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

