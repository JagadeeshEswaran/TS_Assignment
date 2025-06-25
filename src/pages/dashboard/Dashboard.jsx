import React from "react";
import MainContent from "./components/MainContent";

const Dashboard = () => {
  return (
    <article
      style={{
        overflowY: "auto",
        padding: "1rem",
        flexGrow: 1,
        background: "whitesmoke",
      }}
    >
      <MainContent />
    </article>
  );
};

export default Dashboard;
