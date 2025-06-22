import React from "react";
import { Form, NavDropdown } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import PerformanceLineChart from "./PerformanceLineChart";

const LineChart = () => {
	const { ddMetrics, performanceData } = useLoaderData();

	return (
		<article
			className="card border-0 bg-white rounded shadow-sm"
			style={{ height: "auto", maxHeight: "50vh" }}>
			{/* CONTAINER HEADER */}
			<article className="card-header bg-white d-flex flex-column flex-md-row justify-content-between">
				{/* TITLE AND DESCRIPTION */}
				<article className="mb-0 mb-sm-3">
					<span className="fw-semibold">Performance Chart</span>
					<br />
					<span style={{ fontSize: "14px" }} className="opacity-50">
						Key Metrics for Dayparting Schedule Performance Evaluation
					</span>
				</article>

				{/* DROPDOWN */}
				<article className="my-auto">
					<NavDropdown
						id="nav-dropdown-dark-example"
						title="Select Metrics"
						className="border p-2 rounded-3"
						style={{ width: "9rem" }}
						menuVariant="light">
						{ddMetrics?.result?.map((metric) => (
							<Form.Check
								inline
								label={metric.label}
								name={metric.code}
								className="ms-2"
							/>
						))}
					</NavDropdown>
				</article>
			</article>

			<article className="card-body p-0 pt-3" style={{ height: "auto" }}>
				<PerformanceLineChart performanceData={performanceData} />
			</article>
		</article>
	);
};

export default LineChart;
