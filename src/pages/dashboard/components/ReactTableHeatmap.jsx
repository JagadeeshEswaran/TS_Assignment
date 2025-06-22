import React from "react";

const getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFloat = (min, max, decimals = 2) =>
	parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const columns = [
	{
		Header: "Sunday",
		columns: [
			{ Header: "Imp", accessor: "sunday.imp" },
			{ Header: "Clicks", accessor: "sunday.clicks" },
			{ Header: "CPM", accessor: "sunday.cpm" },
		],
	},
	{
		Header: "Monday",
		columns: [
			{ Header: "Imp", accessor: "monday.imp" },
			{ Header: "Clicks", accessor: "monday.clicks" },
			{ Header: "CPM", accessor: "monday.cpm" },
		],
	},
	{
		Header: "Tuesday",
		columns: [
			{ Header: "Imp", accessor: "tuesday.imp" },
			{ Header: "Clicks", accessor: "tuesday.clicks" },
			{ Header: "CPM", accessor: "tuesday.cpm" },
		],
	},
	{
		Header: "Wednesday",
		columns: [
			{ Header: "Imp", accessor: "wednesday.imp" },
			{ Header: "Clicks", accessor: "wednesday.clicks" },
			{ Header: "CPM", accessor: "wednesday.cpm" },
		],
	},
	{
		Header: "Thursday",
		columns: [
			{ Header: "Imp", accessor: "thursday.imp" },
			{ Header: "Clicks", accessor: "thursday.clicks" },
			{ Header: "CPM", accessor: "thursday.cpm" },
		],
	},
	{
		Header: "Friday",
		columns: [
			{ Header: "Imp", accessor: "friday.imp" },
			{ Header: "Clicks", accessor: "friday.clicks" },
			{ Header: "CPM", accessor: "friday.cpm" },
		],
	},
	{
		Header: "Saturday",
		columns: [
			{ Header: "Imp", accessor: "saturday.imp" },
			{ Header: "Clicks", accessor: "saturday.clicks" },
			{ Header: "CPM", accessor: "saturday.cpm" },
		],
	},
];

const days = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];
const hours = Array.from(
	{ length: 24 },
	(_, i) => `${i === 0 ? 12 : i > 12 ? i - 12 : i}${i < 12 ? "am" : "pm"}`
);

const tableData = hours.map((hour) => {
	const row = { hour };
	days.forEach((day) => {
		const imp = getRandomInt(3000000, 6000000);
		const clicks = getRandomInt(20000, 40000);
		const cpm = getRandomFloat(40, 120);

		const minImp = getRandomInt(1000000, 2000000);
		const minClicks = getRandomInt(5000, 10000);
		const minCpm = getRandomFloat(20, 60);

		const maxImp = getRandomInt(5000000, 8000000);
		const maxClicks = getRandomInt(30000, 60000);
		const maxCpm = getRandomFloat(80, 150);

		const total = imp + clicks;

		row[day] = {
			imp,
			clicks,
			cpm,
			minImp,
			minClicks,
			minCpm,
			maxImp,
			maxClicks,
			maxCpm,
			total,
		};
	});
	return row;
});

const getBgClr = (value, minValue, maxValue, hex) => {
	const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
	const percent = clamp((value - minValue) / (maxValue - minValue), 0, 1);

	const hexToRgb = (hex) => {
		const fullHex =
			hex.length === 4
				? "#" + [...hex.slice(1)].map((c) => c + c).join("")
				: hex;

		const r = parseInt(fullHex.slice(1, 3), 16);
		const g = parseInt(fullHex.slice(3, 5), 16);
		const b = parseInt(fullHex.slice(5, 7), 16);

		return [r, g, b];
	};

	const mix = (color1, color2, weight) =>
		color1.map((c, i) => Math.round(c * (1 - weight) + color2[i] * weight));

	const base = hexToRgb(hex);
	const lightTint = mix([255, 255, 255], base, 0.25); // 15% base + 85% white
	const darkTint = mix(base, [0, 0, 0], 0.15); // 85% base + 15% black

	const blended = mix(lightTint, darkTint, percent); // Interpolate between light → dark
	return `rgb(${blended[0]}, ${blended[1]}, ${blended[2]})`;
};

const ReactTableHeatmap = () => {
	return (
		<div className="table-responsive mx-2 my-3">
			<table className="table text-center">
				<thead className="border-bottom">
					<tr style={{ fontSize: "12px", fontWeight: 400 }}>
						<th></th>
						{[
							"Sunday",
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
						].map((day, index) => (
							<th key={index} className="fw-semibold p-0">
								<div className="mb-1 opacity-50" style={{ fontSize: "14px" }}>
									{day}
								</div>

								{/* <hr className="m-0 p-0 w-100" /> */}

								<div
									className="d-flex gap-3 justify-content-between px-2 my-3 opacity-25"
									style={{ fontSize: "12px" }}>
									<div style={{ width: "3rem" }}>Imp</div>
									<div style={{ width: "3rem" }}>Clicks</div>
									<div style={{ width: "3rem" }}>CPM</div>
								</div>
							</th>
						))}
					</tr>
				</thead>

				<tbody className="">
					{[
						"12 AM",
						"1 AM",
						"2 AM",
						"3 AM",
						"4 AM",
						"5 AM",
						"6 AM",
						"7 AM",
						"8 AM",
						"9 AM",
						"10 AM",
						"11 AM",
						"12 PM",
						"1 PM",
						"2 PM",
						"3 PM",
						"4 PM",
						"5 PM",
						"6 PM",
						"7 PM",
						"8 PM",
						"9 PM",
						"10 PM",
						"11 PM",
					].map((time, index) => (
						<tr key={index} className="border-top-0">
							<td
								style={{
									backgroundColor: "#f8f9fa",
									fontSize: "10px",
									width: "8vw",
									minWidth: "75px",
								}}
								className="border-0">
								{time}
							</td>

							{days.map((day) => {
								const data = tableData[index][day];
								return (
									<td key={day} className="m-0 p-0 px-1 border-0">
										<div
											className="d-flex justify-content-center align-items-center gap-1 border-0"
											style={{ fontSize: "10px", whiteSpace: "nowrap" }}>
											<div
												style={{
													backgroundColor: getBgClr(
														data.imp,
														data.maxImp,
														data.minImp,
														"#C68EFD"
													),
													minWidth: "33%",
													marginBottom: "2px",
												}}
												className="d-flex justify-content-center align-items-center h-100 py-2">
												{Math.floor(data.imp / 100000).toLocaleString()}M
											</div>
											<div
												style={{
													backgroundColor: getBgClr(
														data.clicks,
														data.maxClicks,
														data.minClicks,
														"#FF90BB"
													),
													minWidth: "33%",
													marginBottom: "2px",
												}}
												className="d-flex justify-content-center align-items-center h-100 py-2">
												{Math.floor(data.clicks / 1000).toLocaleString()}K
											</div>
											<div
												style={{
													backgroundColor: getBgClr(
														data.cpm,
														data.maxCpm,
														data.minCpm,
														"#6FE6FC"
													),
													minWidth: "33%",
													marginBottom: "2px",
												}}
												className="d-flex justify-content-center align-items-center h-100 py-2">
												{"₹ " + data.cpm.toFixed(1)}
											</div>
										</div>
									</td>
								);
							})}
						</tr>
					))}

					<tr className="border-top">
						<td
							style={{
								backgroundColor: "#f8f9fa",
								fontSize: "10px",
								width: "8vw",
								minWidth: "75px",
							}}>
							Total
						</td>

						{days.map((day) => {
							const totalData = tableData.reduce(
								(acc, row) => {
									acc.imp += row[day].imp;
									acc.clicks += row[day].clicks;
									acc.cpm += row[day].cpm;
									return acc;
								},
								{ imp: 0, clicks: 0, cpm: 0 }
							);
							return (
								<td key={day} className="m-0 p-0 px-1 border-0">
									<div
										className="d-flex justify-content-center align-items-center gap-1 border-0"
										style={{ fontSize: "10px", whiteSpace: "nowrap" }}>
										<div
											style={{
												minWidth: "33%",
												marginBottom: "2px",
											}}
											className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10">
											{Math.floor(totalData.imp / 100000).toLocaleString()}M
										</div>
										<div
											style={{
												minWidth: "33%",
												marginBottom: "2px",
											}}
											className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10">
											{Math.floor(totalData.clicks / 1000).toLocaleString()}K
										</div>
										<div
											style={{
												minWidth: "33%",
												marginBottom: "2px",
											}}
											className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10">
											{"₹ " + totalData.cpm.toFixed(1)}
										</div>
									</div>
								</td>
							);
						})}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ReactTableHeatmap;
