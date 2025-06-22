import React from "react";
import LineChart from "./LineChart";
import HeatMapContainer from "./HeatMapContainer";
import { useLoaderData } from "react-router-dom";

const MainContent = () => {
	const { heatMapData } = useLoaderData();

	return (
		<article className="p-1 d-flex flex-column gap-3">
			<LineChart />
			<HeatMapContainer heatMapData={heatMapData} />
		</article>
	);
};

export default MainContent;
