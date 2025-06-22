import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../../appContext/Context";
import Sidebar from "../../appComponents/pageComponents/Sidebar";
import Topbar from "../../appComponents/pageComponents/Topbar";
import { Spinner } from "react-bootstrap";

const AuthenticateRoute = () => {
	const [isPageLoading, setPageLoading] = useState(true);
	const [vw, setVw] = useState(
		Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	);
	const { isSessionValid } = useAppContext();

	useEffect(() => {
		setTimeout(() => {
			setPageLoading(false);
		}, 1000);
	}, []);

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

	return isSessionValid ? (
		<section className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
			{/* SIDE-BAR */}
			<Sidebar />

			{/* MAIN CONTENT CONTAINER */}
			<main
				className="bg-light text-dark d-flex flex-column flex-grow-1"
				style={{
					marginLeft: vw > 575 && "70px",
				}}>
				{/* TOP-BAR */}
				<article>
					<Topbar />
				</article>

				{
					// LOADING SPINNER
					isPageLoading ? (
						<article className="w-100 h-100 d-flex justify-content-center align-items-center">
							<Spinner animation="border" variant="primary" />
						</article>
					) : (
						<Outlet />
					)
				}
			</main>
		</section>
	) : (
		<Navigate to="/login" />
	);
};

export default AuthenticateRoute;
