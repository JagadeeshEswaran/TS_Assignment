import React, { useState } from "react";
import { fetchHeatMapData } from "../services/fetchHeatMapData";
import { useQuery } from "@tanstack/react-query";
// import { heatMapData } from "../../../POSTMAN/Heatmap_Data";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFloat = (min, max, decimals = 2) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

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
  const lightTint = mix([255, 255, 255], base, 0.05);
  const darkTint = mix(base, [0, 0, 0], 0.05);

  const blended = mix(lightTint, darkTint, percent);

  return `rgb(${blended[0]}, ${blended[1]}, ${blended[2]})`;
};

const ReactTableHeatmap = () => {
  const {
    data: heatMapData,
    isLoading: loadingHeatMap,
    isError: errorHeatMap,
  } = useQuery({
    queryKey: ["heatMapData"],
    queryFn: fetchHeatMapData,
  });

  if (loadingHeatMap)
    return (
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "300px", color: "#5932EA" }}
      >
        <div className="spinner-border mb-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (errorHeatMap)
    return (
      <article
        className="text-danger fw-semibold my-auto d-flex justify-content-center align-items-center"
        style={{ fontSize: "12px", height: "300px" }}
      >
        Error while loading Heat Map
      </article>
    );

  const formatHour = (i) =>
    `${i === 0 ? 12 : i > 12 ? i - 12 : i}${i < 12 ? "am" : "pm"}`;
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const getDayStats = (dayData, hourIndex) => {
    const sortedCPC = [...dayData.Hourly_Data].sort((a, b) => a.CPC - b.CPC);
    const sortedCR = [...dayData.Hourly_Data].sort(
      (a, b) => a.CR_perc - b.CR_perc
    );
    const sortedROAS = [...dayData.Hourly_Data].sort((a, b) => a.ROAS - b.ROAS);

    return {
      CPC: dayData.Hourly_Data[hourIndex].CPC,
      "CR%": dayData.Hourly_Data[hourIndex].CR_perc,
      ROAS: dayData.Hourly_Data[hourIndex].ROAS,
      Total_CPC: dayData.Total_CPC,
      Total_CR_perc: dayData.Total_CR_perc,
      Total_ROAS: dayData.Total_ROAS,
      min_CPC: sortedCPC[0].CPC,
      max_CPC: sortedCPC.at(-1).CPC,
      min_CR_perc: sortedCR[0].CR_perc,
      max_CR_perc: sortedCR.at(-1).CR_perc,
      min_ROAS: sortedROAS[0].ROAS,
      max_ROAS: sortedROAS.at(-1).ROAS,
    };
  };

  const sourceData = heatMapData
    ? Array.from({ length: 24 }, (_, i) => {
        const row = { hour: formatHour(i) };
        days.forEach((day, index) => {
          row[day] = getDayStats(heatMapData[index], i);
        });
        return row;
      })
    : [];

  return (
    <div className="table-responsive mx-2 my-3">
      {sourceData.length ? (
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
                    style={{ fontSize: "12px" }}
                  >
                    <div style={{ width: "3rem" }}>CPC</div>
                    <div style={{ width: "3rem" }}>CR%</div>
                    <div style={{ width: "3rem" }}>ROAS</div>
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
                  className="border-0 opacity-75"
                >
                  {time}
                </td>

                {days.map((day) => {
                  const data = sourceData[index][day];

                  return (
                    <td
                      key={day}
                      className="m-0 p-0 px-1 border-0"
                      style={{
                        width: "auto",
                        minWidth: "100px",
                        overflowX: "auto",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1 border-0"
                        style={{
                          fontSize: "10px",
                          whiteSpace: "nowrap",
                          color: " #5932EA",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: getBgClr(
                              data.CPC,
                              data.min_CPC,
                              data.max_CPC,
                              "#BFADF3"
                            ),
                            minWidth: "33%",
                            marginBottom: "2px",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold"
                        >
                          {Number(data.CPC.toFixed(2))}
                        </div>

                        <div
                          style={{
                            backgroundColor: getBgClr(
                              data["CR%"],
                              data.min_CR_perc,
                              data.max_CR_perc,
                              "#FFBFFB"
                            ),
                            minWidth: "33%",
                            marginBottom: "2px",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2"
                        >
                          {data["CR%"].toFixed(2) + "%"}
                        </div>

                        <div
                          style={{
                            backgroundColor: getBgClr(
                              data.ROAS,
                              data.min_ROAS,
                              data.max_ROAS,
                              "#90DEF3"
                            ),
                            minWidth: "33%",
                            marginBottom: "2px",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2"
                        >
                          {data.ROAS.toFixed(2)}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}

            {["Total"].map((time, index) => (
              <tr key={index} className="border-top-0">
                <td
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontSize: "12px",
                    width: "8vw",
                    minWidth: "75px",
                  }}
                  className="border-0 fw-bold opacity-75"
                >
                  {time}
                </td>

                {days.map((day, idx) => {
                  const data = sourceData[index][day];

                  return (
                    <td
                      key={day}
                      className="m-0 p-0 px-1 border-0"
                      style={{
                        width: "auto",
                        minWidth: "100px",
                        overflowX: "auto",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1 border-0"
                        style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        <div
                          style={{
                            minWidth: "33%",
                            width: "8.25rem",
                            background: "#F4f4f4",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold"
                        >
                          {data.Total_CPC.toFixed(2)}
                        </div>

                        <div
                          style={{
                            minWidth: "33%",
                            background: "#F4f4f4",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold"
                        >
                          {data.Total_CR_perc.toFixed(2)}%
                        </div>

                        <div
                          style={{
                            minWidth: "33%",
                            background: "#F4f4f4",
                          }}
                          className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold"
                        >
                          {data.Total_ROAS.toFixed(2)}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <article
          className="text-danger fw-semibold my-auto"
          style={{ fontSize: "12px" }}
        >
          Something went wrong. Please refresh the page.
        </article>
      )}
    </div>
  );
};

export default ReactTableHeatmap;
