import React from "react";
import { Toast } from "react-bootstrap";
import info_circle from "../../assets/info-circle.svg";

const LoginSuccessToast = ({ variant, message }) => {
  return (
    <Toast className="d-inline-block m-1 position-absolute top-0 mt-4">
      <Toast.Header>
        <strong
          className={`me-auto ${
            variant === "success" ? "text-success" : "text-danger"
          }`}
        >
          {variant === "success" ? "Success" : "Error"}
        </strong>
      </Toast.Header>
      <Toast.Body className={"text-dark"}>{message}</Toast.Body>
    </Toast>
  );
};

export default LoginSuccessToast;
