import { TS_AUTH_ENDPOINT } from "../../../axios/AppInstance";
import { X_USER_IDENTITY } from "../../../constants/API_Constants";

export const fetchPerformanceMetrics = async () => {
  if (!sessionStorage.getItem("authToken")) {
    return 401;
  }

  try {
    const response = await TS_AUTH_ENDPOINT.post(
      "/day-parting/DayPartingFilterList",
      {
        type: "customizeMetrics",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-USER-IDENTITY": X_USER_IDENTITY,
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("authToken")
          )}`,
          type: "text",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch performance metrics");
    }

    const data = await response.data;
    return data;
  } catch (error) {
    // console.error("Error fetching performance metrics:", error);

    if (error.response.status === 401) {
      console.log("Logging out due to 401 error");
      return 401;
    }

    // throw error;
  }
};
