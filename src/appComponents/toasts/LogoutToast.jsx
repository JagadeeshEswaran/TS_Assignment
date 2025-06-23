import React from "react";
import { Toast } from "react-bootstrap";

const LogoutToast = ({ variant, message }) => {
  return (
    <Toast className="m-1 position-absolute end-0 bottom-0 mb-4 me-2">
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

export default LogoutToast;
