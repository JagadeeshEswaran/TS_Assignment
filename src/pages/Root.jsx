import React from "react";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <section
      className="container-fluid w-100 d-flex justify-content-center align-items-center border border-black"
      style={{ height: "100vh" }}
    >
      <article className="text-dark d-flex flex-column justify-content-center align-items-center">
        <h1>Root Page</h1>

        <article className="w-100 d-flex gap-3 justify-content-between mx-auto">
          <Link to={"/login"}>Login Page</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </article>
      </article>
    </section>
  );
};

export default Root;
