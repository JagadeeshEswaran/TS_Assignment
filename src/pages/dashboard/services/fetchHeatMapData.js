import { TS_AUTH_ENDPOINT } from "../../../axios/AppInstance";
import { X_USER_IDENTITY } from "../../../constants/API_Constants";

export const fetchHeatMapData = async () => {
  try {
    const response = await TS_AUTH_ENDPOINT.post(
      "/day-parting/heatmap-list",
      {
        startDate: "2024-06-08",
        endDate: "2024-07-07",
        metrics: ["CPC", "CR_perc", "ROAS"],
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("authToken")
          )}`,
          "X-USER-IDENTITY": X_USER_IDENTITY,
        },
      }
    );

    console.log(response);

    if (response.status !== 200) {
      throw new Error("Failed to fetch heat map data");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching heat map data:", error);
    // throw error;
  }
};
