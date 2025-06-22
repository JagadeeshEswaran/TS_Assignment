import React from "react";
import ReactTableHeatmap from "./ReactTableHeatmap";

const HeatMapContainer = ({ heatMapData }) => {
	return (
		<article
			className="card border-0 bg-white rounded shadow-sm"
			style={{
				minHeight: "53.5vh",
				height: "auto",
				width: "auto",
				maxWidth: "90vw",
			}}>
			<article className="card-header">
				<span className="fw-semibold">Heat Map</span>
				<br />
				<span style={{ fontSize: "14px" }} className="opacity-50">
					Select hours to schedule Dayparting
				</span>
			</article>

			<article>
				<ReactTableHeatmap heatMapData={heatMapData?.result} />
			</article>
		</article>
	);
};

export default HeatMapContainer;
