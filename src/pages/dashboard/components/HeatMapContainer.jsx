import React from "react";
import PlotlyHeatMap from "./PlotlyHeatMap";
import RechartHeatMap from "./RechartHeatMap";
import NivoHeatMap from "./NivoHeatMap";
import ReactTableHeatmap from "./ReactTableHeatmap";

const HeatMapContainer = ({ heatMapData }) => {
	return (
		<article
			className="card border-0 bg-white rounded shadow-sm"
			style={{ minHeight: "53.5vh", height: "auto" }}>
			<article className="card-header">
				<span className="fw-semibold">Heat Map</span>
				<br />
				<span style={{ fontSize: "14px" }} className="opacity-50">
					Select hours to schedule Dayparting
				</span>
			</article>

			<article>
				{/* <PlotlyHeatMap heatMapData={heatMapData} /> */}
				{/* <RechartHeatMap heatMapData={heatMapData} /> */}
				{/* <NivoHeatMap data={heatMapData?.result} /> */}
				<ReactTableHeatmap data={heatMapData?.result} />
			</article>
		</article>
	);
};

export default HeatMapContainer;
