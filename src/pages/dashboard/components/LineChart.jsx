import React from "react";
import { Form, NavDropdown } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import PerformanceLineChart from "./PerformanceLineChart";
import { useQuery } from "@tanstack/react-query";
import { fetchPerformanceMetrics } from "../services/fetchPerformanceMetrics";

const LineChart = () => {
  const {
    data,
    isLoading: loadingMetrics,
    isError: errorMetrics,
  } = useQuery({
    queryKey: ["performanceMetrics"],
    queryFn: fetchPerformanceMetrics,
  });

  return (
    <article
      className="card border-0 bg-white rounded shadow-sm"
      style={{
        height: "auto",
        maxHeight: "50vh",
        width: "auto",
        minWidth: "450px",
      }}
    >
      {/* CONTAINER HEADER */}
      <article className="card-header bg-white d-flex flex-column flex-md-row justify-content-between">
        {/* TITLE AND DESCRIPTION */}
        <article className="mb-3 mb-md-0">
          <span className="fw-semibold opacity-75">Performance Chart</span>
          <br />
          <span style={{ fontSize: "14px" }} className="opacity-50">
            Key Metrics for Dayparting Schedule Performance Evaluation
          </span>
        </article>

        {/* DROPDOWN */}
        {!errorMetrics ? (
          loadingMetrics ? (
            <article
              className=" d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <article className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </article>
            </article>
          ) : (
            <article className="my-auto">
              <NavDropdown
                id="nav-dropdown-dark-example "
                title={
                  <p className="m-0 d-inline-block me-4 opacity-75 fw-normal">
                    Select Metrics
                  </p>
                }
                className="border p-2 rounded-3"
                style={{ width: "9rem", fontSize: "14px" }}
                menuVariant="light"
              >
                <>
                  {data?.result?.map((metric) => (
                    <Form.Check
                      inline
                      label={metric.label}
                      name={metric.code}
                      className="ms-2 d-block opacity-75 fw-medium"
                      style={{ fontSize: "12px" }}
                    />
                  ))}

                  <hr className="m-0 my-2" />

                  <article className="d-flex justify-content-around px-2">
                    <button className="btn btn-sm btn-danger p-0 m-0 px-2">
                      Clear
                    </button>
                    <button className="btn btn-sm btn-primary p-0 m-0 px-2">
                      Apply
                    </button>
                  </article>
                </>
              </NavDropdown>
            </article>
          )
        ) : (
          <article
            className="text-danger fw-semibold my-auto"
            style={{ fontSize: "12px" }}
          >
            Error fetching data
          </article>
        )}
      </article>

      <article className="card-body p-0 pt-3" style={{ height: "auto" }}>
        <PerformanceLineChart />
      </article>
    </article>
  );
};

export default LineChart;
