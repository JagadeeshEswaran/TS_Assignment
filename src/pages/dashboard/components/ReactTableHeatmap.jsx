import React from "react";
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

  const blended = mix(lightTint, darkTint, percent); // Interpolate between light → dark
  return `rgb(${blended[0]}, ${blended[1]}, ${blended[2]})`;
};

const ReactTableHeatmap = ({ heatMapData }) => {
  const sourceData = heatMapData
    ? [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].map((item, i) => ({
        hour: `${i === 0 ? 12 : i > 12 ? i - 12 : i}${i < 12 ? "am" : "pm"}`,
        sunday: {
          CPC: heatMapData[0].Hourly_Data[i].CPC,
          "CR%": heatMapData[0].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[0].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[0].Total_CPC,
          Total_CR_perc: heatMapData[0].Total_CR_perc,
          Total_ROAS: heatMapData[0].Total_ROAS,
          min_CPC: heatMapData[0].min_CPC,
          max_CPC: heatMapData[0].max_CPC,
          min_CR_perc: heatMapData[0].min_CR_perc,
          max_CR_perc: heatMapData[0].max_CR_perc,
          min_ROAS: heatMapData[0].min_ROAS,
          max_ROAS: heatMapData[0].max_ROAS,
        },
        monday: {
          CPC: heatMapData[1].Hourly_Data[i].CPC,
          "CR%": heatMapData[1].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[1].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[1].Total_CPC,
          Total_CR_perc: heatMapData[1].Total_CR_perc,
          Total_ROAS: heatMapData[1].Total_ROAS,
          min_CPC: heatMapData[1].min_CPC,
          max_CPC: heatMapData[1].max_CPC,
          min_CR_perc: heatMapData[1].min_CR_perc,
          max_CR_perc: heatMapData[1].max_CR_perc,
          min_ROAS: heatMapData[1].min_ROAS,
          max_ROAS: heatMapData[1].max_ROAS,
        },
        tuesday: {
          CPC: heatMapData[2].Hourly_Data[i].CPC,
          "CR%": heatMapData[2].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[2].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[2].Total_CPC,
          Total_CR_perc: heatMapData[2].Total_CR_perc,
          Total_ROAS: heatMapData[2].Total_ROAS,
          min_CPC: heatMapData[2].min_CPC,
          max_CPC: heatMapData[2].max_CPC,
          min_CR_perc: heatMapData[2].min_CR_perc,
          max_CR_perc: heatMapData[2].max_CR_perc,
          min_ROAS: heatMapData[2].min_ROAS,
          max_ROAS: heatMapData[2].max_ROAS,
        },
        wednesday: {
          CPC: heatMapData[3].Hourly_Data[i].CPC,
          "CR%": heatMapData[3].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[3].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[3].Total_CPC,
          Total_CR_perc: heatMapData[3].Total_CR_perc,
          Total_ROAS: heatMapData[3].Total_ROAS,
          min_CPC: heatMapData[3].min_CPC,
          max_CPC: heatMapData[3].max_CPC,
          min_CR_perc: heatMapData[3].min_CR_perc,
          max_CR_perc: heatMapData[3].max_CR_perc,
          min_ROAS: heatMapData[3].min_ROAS,
          max_ROAS: heatMapData[3].max_ROAS,
        },
        thursday: {
          CPC: heatMapData[4].Hourly_Data[i].CPC,
          "CR%": heatMapData[4].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[4].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[4].Total_CPC,
          Total_CR_perc: heatMapData[4].Total_CR_perc,
          Total_ROAS: heatMapData[4].Total_ROAS,
          min_CPC: heatMapData[4].min_CPC,
          max_CPC: heatMapData[4].max_CPC,
          min_CR_perc: heatMapData[4].min_CR_perc,
          max_CR_perc: heatMapData[4].max_CR_perc,
          min_ROAS: heatMapData[4].min_ROAS,
          max_ROAS: heatMapData[4].max_ROAS,
        },
        friday: {
          CPC: heatMapData[5].Hourly_Data[i].CPC,
          "CR%": heatMapData[5].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[5].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[5].Total_CPC,
          Total_CR_perc: heatMapData[5].Total_CR_perc,
          Total_ROAS: heatMapData[5].Total_ROAS,
          min_CPC: heatMapData[5].min_CPC,
          max_CPC: heatMapData[5].max_CPC,
          min_CR_perc: heatMapData[5].min_CR_perc,
          max_CR_perc: heatMapData[5].max_CR_perc,
          min_ROAS: heatMapData[5].min_ROAS,
          max_ROAS: heatMapData[5].max_ROAS,
        },
        saturday: {
          CPC: heatMapData[6].Hourly_Data[i].CPC,
          "CR%": heatMapData[6].Hourly_Data[i].CR_perc,
          ROAS: heatMapData[6].Hourly_Data[i].ROAS,
          Total_CPC: heatMapData[6].Total_CPC,
          Total_CR_perc: heatMapData[6].Total_CR_perc,
          Total_ROAS: heatMapData[6].Total_ROAS,
          min_CPC: heatMapData[6].min_CPC,
          max_CPC: heatMapData[6].max_CPC,
          min_CR_perc: heatMapData[6].min_CR_perc,
          max_CR_perc: heatMapData[6].max_CR_perc,
          min_ROAS: heatMapData[6].min_ROAS,
          max_ROAS: heatMapData[6].max_ROAS,
        },
      }))
    : [];

  if (!heatMapData) {
    return (
      <p className="text-center mt-4 fs-4 fw-semibold opacity-25">No Data</p>
    );
  }

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
                      style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                    >
                      <div
                        style={{
                          backgroundColor: getBgClr(
                            data.CPC,
                            data.max_CPC,
                            data.min_CPC,
                            "#C68EFD"
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
                            data.max_CR_perc,
                            data.min_CR_perc,
                            "#FF90BB"
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
                            data.max_ROAS,
                            data.min_ROAS,
                            "#6FE6FC"
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

              {days.map((day) => {
                const data = sourceData[index][day];

                return (
                  <td
                    className="m-0 p-0 px-1 border-0"
                    style={{
                      width: "auto",
                      minWidth: "100px",
                      overflowX: "auto",
                    }}
                  >
                    <div>
                      <td key={day} className="m-0 p-0  border-0">
                        <div
                          className="d-flex justify-content-center align-items-center gap-1 border-0"
                          style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                        >
                          <div
                            style={{
                              minWidth: "33%",
                              width: "8.25rem",
                              //   marginBottom: "2px",
                            }}
                            className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold bg-dark bg-opacity-25"
                          >
                            {data.Total_CPC.toFixed(2)}
                          </div>

                          <div
                            style={{
                              minWidth: "33%",
                              //   marginBottom: "2px",
                            }}
                            className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold bg-dark bg-opacity-25"
                          >
                            {data.Total_CR_perc.toFixed(2)}%
                          </div>

                          <div
                            style={{
                              minWidth: "33%",
                              //   marginBottom: "2px",
                            }}
                            className="d-flex justify-content-center align-items-center h-100 py-2 fw-semibold bg-dark bg-opacity-25"
                          >
                            {data.Total_ROAS.toFixed(2)}
                          </div>
                        </div>
                      </td>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}

          {/* <tr className="border-top">
            <td
              style={{
                backgroundColor: "#f8f9fa",
                fontSize: "10px",
                width: "8vw",
                minWidth: "75px",
              }}
            >
              Total
            </td>

            {days.map((day) => {
              return (
                <td key={day} className="m-0 p-0 px-1 border-0">
                  <div
                    className="d-flex justify-content-center align-items-center gap-1 border-0"
                    style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                  >
                    <div
                      style={{
                        minWidth: "33%",
                        marginBottom: "2px",
                      }}
                      className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10"
                    >
                      {Math.floor(totalData.imp / 100000).toLocaleString()}M
                    </div>
                    <div
                      style={{
                        minWidth: "33%",
                        marginBottom: "2px",
                      }}
                      className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10"
                    >
                      {Math.floor(totalData.clicks / 1000).toLocaleString()}K
                    </div>
                    <div
                      style={{
                        minWidth: "33%",
                        marginBottom: "2px",
                      }}
                      className="d-flex justify-content-center align-items-center h-100 py-2 bg-secondary bg-opacity-10"
                    >
                      {"₹ " + totalData.cpm.toFixed(1)}
                    </div>
                  </div>
                </td>
              );
            })}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTableHeatmap;
