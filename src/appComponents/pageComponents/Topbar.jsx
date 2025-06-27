import React from "react";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import { BsFullscreen } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { toast } from "react-toastify";

const topBarLinks = [
  {
    id: 1,
    name: "full-screen",
    icon: <BsFullscreen />,
  },
  {
    id: 2,
    name: "lighr-mode toggle",
    icon: <IoMoonOutline />,
  },
  {
    id: 3,
    name: "User Options",
    icon: <LuUser />,
  },
];

const Topbar = () => {
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails")) || {};

  return (
    <section
      className="bg-white border-opacity-25 d-flex justify-content-between align-items-center"
      style={{
        height: "50px",
        width: "auto",
        minWidth: "92.5vw",
      }}
    >
      <article className="ms-3 my-auto">
        <p className="w-100 m-0 fw-semibold">Dashboard</p>
      </article>

      <article className="d-flex justify-content-between align-items-center px-3">
        <ul className="d-flex gap-3 justify-content-end m-0 p-0 list-unstyled">
          {topBarLinks.map((link) => (
            <li
              key={link.id}
              className="m-0 d-flex justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
            >
              {link.name === "User Options" ? (
                <NavDropdown
                  as={ButtonGroup}
                  title={link.icon}
                  // style={{ minWidth: "250px" }}
                >
                  {/* USER INFO AND STATUS */}
                  <Dropdown.Item
                    eventKey="1"
                    className="d-flex gap-2"
                    style={{ width: "250px" }}
                  >
                    <article
                      className="text-capitalize border border-1 border-light rounded-circle d-flex justify-content-center align-items-center p-0 m-0 my-auto fw-semibold text-light"
                      style={{
                        width: "37px",
                        height: "37px",
                        background: "#471396",
                      }}
                    >
                      {userDetails.fullName[0]}
                    </article>

                    <article>
                      <p
                        className="m-0"
                        style={{ fontSize: "16px", fontWeight: "500" }}
                      >
                        {userDetails.fullName}
                      </p>
                      <p className="m-0" style={{ fontSize: "14px" }}>
                        Online
                      </p>
                    </article>
                  </Dropdown.Item>

                  {/* <Dropdown.Divider /> */}

                  {/* LOGOUT LINK */}
                  <Dropdown.Item
                    eventKey="4"
                    className="d-flex gap-2 text-danger mt-3 py-2"
                    onClick={() => {
                      sessionStorage.clear();
                      toast.success("Logout Successful");

                      setTimeout(() => {
                        location.reload();
                      }, 1500);
                    }}
                  >
                    <RxExit className="fs-5 my-auto" />
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      Logout
                    </span>
                  </Dropdown.Item>
                </NavDropdown>
              ) : (
                <a
                  href={link.link}
                  className="text-dark text-decoration-none fs-6"
                >
                  {link.icon}
                </a>
              )}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Topbar;
