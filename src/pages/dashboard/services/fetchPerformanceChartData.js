import { TS_AUTH_ENDPOINT } from "../../../axios/AppInstance";
import { X_USER_IDENTITY } from "../../../constants/API_Constants";

export const fetchPerformanceChartData = async () => {
	try {
		const response = await TS_AUTH_ENDPOINT.post(
			"/day-parting/DayPartingPerformanceGraphList",
			{
				startDate: "2024-06-08",
				endDate: "2024-07-07",
				metrics: ["CPC", "CR_perc", "ROAS"],
			},
			{
				headers: {
					Accept: "application/json",
					"Accept-Language": "en-GB,en;q=0.9",
					"X-USER-IDENTITY": X_USER_IDENTITY,
					Authorization: `Bearer ${JSON.parse(
						sessionStorage.getItem("authToken")
					)}`,
				},
			}
		);

		if (response.status !== 200) {
			throw new Error("Failed to fetch performance metrics");
		}

		const data = await response.data;
		return data;
	} catch (error) {
		console.error("Failed to fetch performance chart data:", error);
		return [];
	}
};
