import React from "react";
import app_logo_icon from "../../assets/ts_logo_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="bg-white"
      style={{
        maxWidth: "250px",
        width: "70px",
      }}
    >
      {/* LOGO CONTAINER */}
      <article
        className="border-bottom border-dark border-opacity-25 d-flex justify-content-center align-items-center"
        style={{ height: "6vh" }}
      >
        <Link to={"/dashboard"}>
          <img
            src={app_logo_icon}
            alt="App Logo"
            height={40}
            className="mx-auto"
          />
        </Link>
      </article>
    </aside>
  );
};

export default Sidebar;
