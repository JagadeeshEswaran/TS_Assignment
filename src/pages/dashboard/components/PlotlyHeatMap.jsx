import React from "react";
import Plot from "react-plotly.js";

const yAxisLabels = [
	"Total",
	"12am",
	"1am",
	"2am",
	"3am",
	"4am",
	"5am",
	"6am",
	"7am",
	"8am",
	"9am",
	"10am",
	"11am",
	"12pm",
	"1pm",
	"2pm",
	"3pm",
	"4pm",
	"5pm",
	"6pm",
	"7pm",
	"8pm",
	"9pm",
	"10pm",
	"11pm",
];

const xAxisLabels = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Satuday",
];

const data = [
	[
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23,
	],
	[
		2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
		23, 24,
	],
	[
		3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
		24, 25,
	],
	[
		4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
		24, 25, 26,
	],
	[
		5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
		25, 26, 27,
	],
	[
		6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
		26, 27, 28,
	],
	[
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
		27, 28, 29,
	],
	[
		8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
		27, 28, 29, 30,
	],
	[
		9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
		28, 29, 30, 31,
	],
	[
		10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		29, 30, 31, 32,
	],
	[
		11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
		30, 31, 32, 33,
	],
	[
		12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
		31, 32, 33, 34,
	],
	[
		13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
		32, 33, 34, 35,
	],
	[
		14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		33, 34,
	],
	[15, 16, 17, 18, 19, 20, 21],
];

const PlotlyHeatMap = ({ heatMapData }) => {
	console.log("HeatMap Data:", heatMapData.result[0]);

	const prepData = yAxisLabels.map((_, hourIndex) => {
		const row = [];

		// For each day (here only 1), push value
		const hourlyEntry = heatMapData.result[0].Hourly_Data.find(
			(h) => h.hour === hourIndex
		);
		row.push(hourlyEntry?.ROAS || 0); // or CPC, CR_perc

		return row;
	});

	// console.log("Prepared Data for Heatmap:", prepData);

	return (
		<Plot
			data={[
				{
					z: prepData,
					x: xAxisLabels,
					y: yAxisLabels.map((label) => <p className="text-danger">{label}</p>),
					yaxis: {
						title: "Categories",
					},
					xaxis: {
						title: "Hours",
					},
					type: "heatmap",
					colorscale: "Viridis",
					showscale: false,
				},
			]}
			layout={{
				width: 600,
				height: "auto",
				title: "Heatmap Example",
				hidesources: true,
				hiddenlabels: true,
				xaxis: {
					title: "Hours",
					side: "top",
				},
				yaxis: {
					title: "Categories",
				},
				autosize: true,
				margin: { l: 50, r: 50, t: 50, b: 50 },
				hovermode: "closest",
				showlegend: true,
				plot_bgcolor: "#fff",
				paper_bgcolor: "#fff",
				font: {
					family: "Arial, sans-serif",
					size: 12,
					color: "#000",
				},
				// Add any additional layout properties here
				// For example, you can set the background color or grid lines
				grid: { rows: 1, columns: 1, pattern: "independent" },
			}}
			// layout={{ width: 400, height: 400, title: "Heatmap" }}
		/>
	);
};

export default PlotlyHeatMap;
