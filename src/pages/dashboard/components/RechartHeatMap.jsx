import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

const RechartHeatMap = ({ heatMapData }) => {
	const hourlyData = heatMapData?.result[0].Hourly_Data || [];

	// console.log("RechartHeatMap Data:", hourlyData);

	const formattedData = hourlyData.map((entry) => ({
		hour: new Date(`1970-01-01T${entry.time_part}`).toLocaleTimeString([], {
			hour: "2-digit",
			hour12: true,
		}),
		CPC: parseFloat(entry.CPC.toFixed(2)),
		CR_perc: parseFloat(entry.CR_perc.toFixed(2)),
		ROAS: parseFloat(entry.ROAS.toFixed(2)),
	}));

	console.log("Formatted Data for RechartHeatMap:", formattedData);

	return (
		<ResponsiveContainer width="100%" height={400}>
			<BarChart
				// data={[]}
				data={formattedData}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis />
				<YAxis dataKey="hour" angle={-45} textAnchor="end" height={70} />
				<Tooltip />
				<Legend />
				<Bar dataKey="CPC" fill="#8884d8" />
				<Bar dataKey="CR_perc" fill="#82ca9d" />
				<Bar dataKey="ROAS" fill="#ffc658" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default RechartHeatMap;
