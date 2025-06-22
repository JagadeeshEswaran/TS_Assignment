import React from "react";
import Sidebar from "../../appComponents/pageComponents/Sidebar";
import Topbar from "../../appComponents/pageComponents/Topbar";
import MainContent from "./components/MainContent";

const Dashboard = () => {
  return (
    <section className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      {/* SIDE-BAR */}
      <Sidebar />

      {/* MAIN CONTENT CONTAINER */}
      <main className="bg-light text-dark d-flex flex-column flex-grow-1">
        {/* TOP-BAR */}
        <article>
          <Topbar />
        </article>

        {/* MAIN-CONTENT - SCROLLABLE CONTAINER AREA */}
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
      </main>
    </section>
  );
};

export default Dashboard;
