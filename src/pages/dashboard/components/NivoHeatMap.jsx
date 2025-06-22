import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";

const sampleData = [
	{
		id: "12 AM",
		data: [
			{
				x: "Sunday",
				CPC: 12863,
				CR_perc: 39484,
				ROAS: 52552,
				minCPC: 4038,
				maxCPC: 64035,
				minCR: 64114,
				maxCR: 97368,
				minROAS: -92023,
				maxROAS: 12863,
				totalCPC: 12863,
				totalCR: 39484,
				totalROAS: 52552,
			},
			{
				x: "Monday",
				CPC: 12863,
				CR_perc: 39484,
				ROAS: 52552,
				minCPC: 4038,
				maxCPC: 64035,
				minCR: 64114,
				maxCR: 97368,
				minROAS: -92023,
				maxROAS: 12863,
				totalCPC: 12863,
				totalCR: 39484,
				totalROAS: 52552,
			},
			{
				x: "Tuesday",
				CPC: 12863,
				CR_perc: 39484,
				ROAS: 52552,
				minCPC: 4038,
				maxCPC: 64035,
				minCR: 64114,
				maxCR: 97368,
				minROAS: -92023,
				maxROAS: 12863,
				totalCPC: 12863,
				totalCR: 39484,
				totalROAS: 52552,
			},
			// {
			// 	x: "Wednesday",
			// 	y: 64038,
			// },
			// {
			// 	x: "Thursday",
			// 	y: -64114,
			// },
			// {
			// 	x: "Friday",
			// 	y: 97368,
			// },
			// {
			// 	x: "Saturday",
			// 	y: -92023,
			// },
		],
	},
	// {
	// 	id: "1 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: 74716,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: 69268,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: -44440,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: -23317,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: 48359,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: -38455,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: 57191,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: 16012,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: 42824,
	// 		},
	// 	],
	// },
	// {
	// 	id: "2 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: -7481,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: -96296,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: 53400,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: 16699,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: -20169,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: -29610,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: -15793,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: -18505,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: 11773,
	// 		},
	// 	],
	// },
	// {
	// 	id: "3 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: 42166,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: -27486,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: -4952,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: 51618,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: 46841,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: -82899,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: -85120,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: -25912,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: -65339,
	// 		},
	// 	],
	// },
	// {
	// 	id: "4 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: 76353,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: -13908,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: 63486,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: 20178,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: -95554,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: 47612,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: -58342,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: 64774,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: 6042,
	// 		},
	// 	],
	// },
	// {
	// 	id: "5 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: -79443,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: -53515,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: 33543,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: 88771,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: -23248,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: -69293,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: -13781,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: 11227,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: 41326,
	// 		},
	// 	],
	// },
	// {
	// 	id: "6 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: -97229,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: 65612,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: 40333,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: 88790,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: -80691,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: -94786,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: -68177,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: -98417,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: -74964,
	// 		},
	// 	],
	// },
	// {
	// 	id: "7 AM",
	// 	data: [
	// 		{
	// 			x: "Train",
	// 			y: 66943,
	// 		},
	// 		{
	// 			x: "Subway",
	// 			y: 25789,
	// 		},
	// 		{
	// 			x: "Bus",
	// 			y: 38252,
	// 		},
	// 		{
	// 			x: "Car",
	// 			y: -95672,
	// 		},
	// 		{
	// 			x: "Boat",
	// 			y: 82380,
	// 		},
	// 		{
	// 			x: "Moto",
	// 			y: 26957,
	// 		},
	// 		{
	// 			x: "Moped",
	// 			y: 62584,
	// 		},
	// 		{
	// 			x: "Bicycle",
	// 			y: 56361,
	// 		},
	// 		{
	// 			x: "Others",
	// 			y: 11812,
	// 		},
	// 	],
	// },
];

const flattenHeatmapData = (rawData) => {
	const metrics = ["CPC", "CR_perc", "ROAS"];
	const flattened = rawData.map((hourBlock) => {
		const transformedRow = {
			id: hourBlock.id,
			data: [],
		};

		hourBlock.data.forEach((dayData) => {
			metrics.forEach((metric) => {
				transformedRow.data.push({
					x: `${dayData.x} - ${metric}`,
					y: dayData[metric],
				});
			});
		});

		return transformedRow;
	});

	return flattened;
};

const transformHourlyDataToHeatMapFormat = (hourlyData) => {
	const formatHour = (timeStr) => {
		const hour = parseInt(timeStr.split(":")[0]);
		const ampm = hour >= 12 ? "pm" : "am";
		const formattedHour = `${hour % 12 === 0 ? 12 : hour % 12}${ampm}`;
		return formattedHour;
	};

	const labels = hourlyData.map((d) => formatHour(d.time_part));
	const cpcRow = { metric: "CPC" };
	const crRow = { metric: "CR_perc" };
	const roasRow = { metric: "ROAS" };

	// hourlyData?.forEach((d) => {
	// 	const label = formatHour(d.time_part);
	// 	cpcRow[label] = d.CPC;
	// 	crRow[label] = d.CR_perc;
	// 	roasRow[label] = d.ROAS;
	// });

	return [cpcRow, crRow, roasRow];
};

const NivoHeatMap = ({ data }) => {
	const heatMapData = transformHourlyDataToHeatMapFormat(data[0].Hourly_Data);
	const formattedData = flattenHeatmapData(sampleData);

	console.log("Transformed Heat Map Data:", heatMapData);

	return (
		<div style={{ width: "100%", height: "600px" }}>
			<ResponsiveHeatMap
				// data={sampleData}
				data={formattedData}
				// keys={Object.keys(heatMapData[0]).filter((key) => key !== "metric")}
				keys={["CPC", "CR_perc", "ROAS"]}
				indexBy="metric"
				margin={{ top: 100, right: 90, bottom: 60, left: 90 }}
				valueFormat=">-.2f"
				axisTop={{
					tickRotation: -45,
				}}
				axisLeft={{
					tickRotation: 0,
					tickSize: 5,
					tickPadding: 5,
				}}
				colors={{
					type: "diverging",
					scheme: "red_yellow_blue",
					divergeAt: 0.5,
				}}
				emptyColor="#eeeeee"
				legends={[
					{
						anchor: "bottom",
						translateX: 0,
						translateY: 40,
						length: 400,
						thickness: 8,
						direction: "row",
						tickPosition: "after",
						tickSize: 3,
						tickSpacing: 4,
						tickOverlap: false,
						tickFormat: ">-.2f",
						title: "← Value →",
						titleAlign: "start",
						titleOffset: 4,
					},
				]}
			/>
		</div>
	);
};

export default NivoHeatMap;
