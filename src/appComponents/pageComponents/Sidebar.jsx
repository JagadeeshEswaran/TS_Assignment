import React, { useEffect, useState } from "react";
import app_logo_icon from "../../assets/ts_logo_icon.svg";
import app_logo from "../../assets/ts_logo_dark.svg";
import dashboard_icon_01 from "../../assets/dashboard_icon.svg";
import sidebar_link1_icon from "../../assets/sidebar_link1_icon.svg";
import sidebar_logo_full from "../../assets/sidebar_logo_full.png";
import { RiDashboard2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vw, setVw] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setVw(
        Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        )
      );
    });
  }, []);

  return (
    <aside
      className={`d-none d-sm-block bg-white shadow-sm ${
        isExpanded ? "border-end" : ""
      }`}
      style={{
        maxWidth: "250px",
        width: vw > 575 && isExpanded ? "250px" : "70px",
        transition: "width 0.3s ease",
        overflowX: "hidden",
        position: "fixed",
        zIndex: 1000,
        height: "100vh",
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* LOGO CONTAINER */}
      <article
        className={`d-flex justify-content-${
          isExpanded ? "start ms-3" : "center"
        } align-items-center mt-2`}
        style={{ height: "62px" }}
      >
        {isExpanded ? (
          <Link
            to={"/dashboard"}
            style={{
              transition: "0.2s width ease-in-out",
            }}
          >
            <img
              src={sidebar_logo_full}
              alt="App Logo"
              height={isExpanded ? 50 : 40}
              className=""
              style={{
                transition: "0.2s width ease-in-out",
              }}
            />
          </Link>
        ) : (
          <Link to={"/dashboard"}>
            <img
              src={app_logo_icon}
              alt="App Logo"
              height={40}
              className="mx-auto"
            />
          </Link>
        )}
      </article>

      <hr className="my-2" />

      {/* NAVIGATION CONTAINER */}
      <article
        className="d-flex justify-content-center align-items-center mt-3"
        style={{ height: "6vh" }}
      >
        {!isExpanded ? (
          <article
            className="d-flex gap-2 align-items-center"
            style={{ height: "36px", width: "40px" }}
          >
            <Link
              to={"/dashboard"}
              className="fs-2 text-decoration-none d-flex justify-content-center align-items-center p-1 rounded-2 shadow-sm"
              style={{
                backgroundColor: "#471396",
                color: "#D0D5DD",
                height: "36px",
                width: "40px",
              }}
            >
              <img
                src={sidebar_link1_icon}
                alt="Dashboard Icon"
                width={22}
                style={{ color: "#D0D5DD" }}
              />
            </Link>
          </article>
        ) : (
          <Link
            to={"/dashboard"}
            className="d-flex gap-2 align-items-center text-light rounded p-1 ps-2"
            style={{
              backgroundColor: " #F6F0FF",
              color: "#471396",
              width: "90%",
            }}
          >
            <article
              className="fs-4 text-decoration-none d-flex justify-content-center align-items-center p-1 rounded-2"
              style={{
                color: "#5208A5",
              }}
            >
              <img src={dashboard_icon_01} alt="Dashboard Icon" />
            </article>
            <p
              className="fw-semibold m-0 text-opacity-50"
              style={{ color: "#5208A5", fontSize: "14px" }}
            >
              Dashboard
            </p>
          </Link>
        )}
      </article>
    </aside>
  );
};

export default Sidebar;
