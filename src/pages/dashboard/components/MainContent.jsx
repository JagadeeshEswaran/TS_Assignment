import React from "react";
import LineChart from "./LineChart";
import HeatMapContainer from "./HeatMapContainer";

const MainContent = () => {
  return (
    <article className="p-1 d-flex flex-column gap-3">
      <LineChart />
      <HeatMapContainer />
    </article>
  );
};

export default MainContent;
