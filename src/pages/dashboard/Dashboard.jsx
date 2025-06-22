import React, { useEffect, useState } from "react";
import Sidebar from "../../appComponents/pageComponents/Sidebar";
import Topbar from "../../appComponents/pageComponents/Topbar";
import MainContent from "./components/MainContent";
import { fetchPerformanceMetrics } from "./services/fetchPerformanceMetrics";
import { fetchPerformanceChartData } from "./services/fetchPerformanceChartData";
import { fetchHeatMapData } from "./services/fetchHeatMapData";
const Dashboard = () => {
	return (
		<article
			style={{
				overflowY: "auto",
				padding: "1rem",
				flexGrow: 1,
				background: "whitesmoke",
			}}>
			<MainContent />
		</article>
	);
};

export default Dashboard;

export const LineChartLoader = async () => {
	const ddMetrics = await fetchPerformanceMetrics();
	const performanceData = await fetchPerformanceChartData();
	const heatMapData = await fetchHeatMapData();

	return { ddMetrics, performanceData, heatMapData };
};
