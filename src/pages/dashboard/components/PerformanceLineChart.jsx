import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "./CustomToolTip";

const PerformanceLineChart = ({ performanceData }) => {
  const preparedData = performanceData?.result?.categories.map((item, idx) => ({
    name: `${item.split(":")[0]?.trim()}hr`,
    [performanceData?.result?.series[0]?.name]:
      performanceData?.result?.series[0]?.data[idx],
    [performanceData?.result?.series[1]?.name]:
      performanceData?.result?.series[1]?.data[idx],
    [performanceData?.result?.series[2]?.name]:
      performanceData?.result?.series[2]?.data[idx],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={preparedData}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" style={{ fontSize: "10px", fontWeight: "400" }} />
        <YAxis
          yAxisId="left"
          orientation="left"
          style={{ fontSize: "10px", fontWeight: "400" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          style={{ fontSize: "10px", fontWeight: "400" }}
        />
        <Tooltip content={<CustomToolTip />} />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey={performanceData?.result?.series[0]?.name}
          stroke="#8884d8"
          fill="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey={performanceData?.result?.series[1]?.name}
          stroke="#82ca9d"
          fill="green"
          strokeWidth={3}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey={performanceData?.result?.series[2]?.name}
          stroke="orange"
          fill="orange"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceLineChart;
