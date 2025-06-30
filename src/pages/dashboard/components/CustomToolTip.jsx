import React from "react";

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="p-2 rounded border shadow-sm"
        style={{ backgroundColor: "#fff", fontSize: "12px", fontWeight: "500" }}
      >
        <p className="m-0 fw-semibold mb-2" style={{ color: "#949191" }}>
          {label}
        </p>
        {payload.map((entry, idx) => (
          <p key={idx} className="m-0" style={{ color: entry.stroke }}>
            {entry.name}: {Math.round(entry.value * 100) / 100}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
