import React, { useState } from "react";
import ts_logo_dark from "../../assets/ts_logo_dark.svg";
import { Form, InputGroup, Spinner, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import email_icon from "../../assets/envelope-open.svg";
import password_icon from "../../assets/key.svg";
import { TS_AUTH_ENDPOINT } from "../../axios/AppInstance";
import { useAppContext } from "../../appContext/Context";
import LoginSuccessToast from "../../appComponents/toasts/LoginSuccessToast";
import { handleFormSubmit } from "./services/LoginServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showToast, setShowToast] = useState(false);
  const { setSessionValidity, isLoading, setLoading } = useAppContext();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState(null);
  const [data, setData] = useState({
    email: "test@dev.com",
    password: "#Test@123",
  });
  const navigate = useNavigate();

  return (
    <section
      className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center border border-black bg-light bg-opacity-75"
      style={{ height: "100vh" }}
    >
      {/* APP LOGO */}
      <article
        className="position-absolute left-0 fw-semibold "
        style={{
          top: "4.5vh",
          fontSize: "4rem",
        }}
      >
        {/* TECHSAVVY */}
        <img src={ts_logo_dark} alt="" height={"120px"} />
      </article>

      {/* LOGIN FORM */}
      <article
        className="h-50 card text-dark d-flex flex-column justify-content-center align-items-center border border-3 border-secondary border-opacity-25 shadow rounded-4"
        style={{
          width: "85%",
          maxWidth: "500px",
        }}
      >
        <h2 className="mb-4">Welcome Back</h2>

        {/* BOOTSTRAP FORM - FOR SIGN-IN */}
        <Form
          className="w-75 mt-3"
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              setData,
              setShowToast,
              setSessionValidity,
              setLoading,
              setToastMessage,
              data,
              toastVariant,
              setToastVariant,
              navigate
            )
          }
        >
          {/* EMAIL INPUT */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text
                id="inputGroupPrepend"
                className="bg-white border-end-0"
              >
                <img src={email_icon} alt="" height={"20px"} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email ID or Username"
                aria-describedby="inputGroupPrepend"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* PASSWORD INPUT */}
          <Form.Group
            className="mb-3 position-relative"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text
                id="inputGroupPrepend"
                className="bg-white border-end-0"
              >
                <img src={password_icon} alt="" height={"20px"} />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              {/* <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback> */}
            </InputGroup>

            <Button
              variant="link"
              className=" position-absolute end-0 text-decoration-none text-danger"
              style={{ top: "50%", transform: "translateY(-10%)" }}
            >
              Forgot Password
            </Button>
          </Form.Group>

          {/* REMEMBER ME CHECKBOX */}
          <Form.Group
            className="mb-3 w-100 d-flex justify-content-end"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              name="rememberMe"
              type="checkbox"
              label="Remember me"
              className=""
            />
          </Form.Group>

          {/* SIGN IN BUTTON */}
          {isLoading ? (
            <article
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ height: "4.5vh" }}
            >
              <Spinner
                animation="border"
                role="status"
                variant="primary"
                className="mx-auto text-center"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </article>
          ) : (
            <Button variant="primary" type="submit" className="w-100">
              SIGN IN
            </Button>
          )}
        </Form>
      </article>

      {/* BLUR BALL 01 */}
      <article
        className="bg-info position-absolute rounded-circle"
        style={{
          top: "5.5vh",
          left: "15vw",
          height: "35rem",
          width: "35rem",
          zIndex: "-100",
          filter: "blur(20px)",
        }}
      ></article>

      {/* BLUR BALL 02 */}
      <article
        className="bg-primary position-absolute rounded-circle"
        style={{
          bottom: "5.5vh",
          right: "15vw",
          height: "35rem",
          width: "35rem",
          zIndex: "-100",
          filter: "blur(20px)",
        }}
      ></article>

      {showToast && (
        <LoginSuccessToast variant={toastVariant} message={toastMessage} />
      )}
    </section>
  );
};

export default Login;
