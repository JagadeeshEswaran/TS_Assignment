import React, { useState } from "react";
import app_logo_icon from "../../assets/ts_logo_icon.svg";
import app_logo from "../../assets/ts_logo_dark.svg";
import { RiDashboard2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [isExpanded, setIsExpanded] = useState(null);

	return (
		<aside
			className={`bg-white shadow-sm ${isExpanded ? "border-end" : ""}`}
			style={{
				maxWidth: "250px",
				width: isExpanded ? "250px" : "70px",
				transition: "width 0.3s ease",
				overflowX: "hidden",
				position: "fixed",
				zIndex: 1000,
				height: "100vh",
			}}
			onMouseEnter={() => setIsExpanded(true)}
			onMouseLeave={() => setIsExpanded(false)}>
			{/* LOGO CONTAINER */}
			<article
				className={`border-bottom border-dark border-opacity-25 d-flex justify-content-${
					isExpanded ? "start ms-3" : "center"
				} align-items-center`}
				style={{ height: "6vh" }}>
				{isExpanded ? (
					<Link to={"/"}>
						<img
							src={app_logo}
							alt="App Logo"
							height={isExpanded ? 50 : 40}
							className="mx-auto"
						/>
					</Link>
				) : (
					<Link to={"/"}>
						<img
							src={app_logo_icon}
							alt="App Logo"
							height={40}
							className="mx-auto"
						/>
					</Link>
				)}
			</article>

			{/* NAVIGATION CONTAINER */}
			<article
				className="d-flex justify-content-center align-items-center mt-2"
				style={{ height: "6vh" }}>
				{!isExpanded ? (
					<article className="d-flex gap-2 align-items-center">
						<Link
							to={"/dashboard"}
							className="fs-1 text-light text-decoration-none d-flex justify-content-center align-items-center p-1 rounded-2 shadow-sm"
							style={{
								backgroundColor: "#471396",
							}}>
							<RiDashboard2Line />
						</Link>
					</article>
				) : (
					<article
						className="d-flex gap-2 align-items-center text-light rounded p-1 ps-2"
						style={{
							backgroundColor: "#EBD6FB",
							color: "#471396",
							width: "90%",
						}}>
						<Link
							to={"/dashboard"}
							className="fs-2 text-decoration-none d-flex justify-content-center align-items-center p-1 rounded-2"
							style={{
								backgroundColor: "#EBD6FB",
								color: "#471396",
							}}>
							<RiDashboard2Line />
						</Link>
						<p className="fs-6 fw-semibold m-0 " style={{ color: "#471396" }}>
							Dashboard
						</p>
					</article>
				)}
			</article>
		</aside>
	);
};

export default Sidebar;
