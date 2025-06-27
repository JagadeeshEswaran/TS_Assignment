import React, { useState } from "react";
import ts_logo_dark from "../../assets/ts_logo_dark.svg";
import { Form, InputGroup, Spinner, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import email_icon from "../../assets/envelope-open.svg";
import { SlLock } from "react-icons/sl";
// import password_icon from "../../assets/key.svg";
import tp_login_bg from "../../assets/ts_login_bg.png";
import ts_full_logo from "../../assets/ts_full_logo.svg";
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
      className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center border border-black bg-light bg-opacity-50"
      style={{
        height: "auto",
        minHeight: "100vh",
        backgroundImage: `url(${tp_login_bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transform: "scaleX(-1)",
      }}
    >
      <article
        style={{ transform: "scaleX(-1)", width: "100%", height: "100vh" }}
        className="d-flex flex-column justify-content-center align-items-center position-relative"
      >
        {/* APP LOGO */}
        <article
          className="position-absolute"
          style={{
            top: "80px",
            translateX: "-50%",
          }}
        >
          {/* TECHSAVVY */}
          <img src={ts_full_logo} alt="" height={50} />
        </article>

        {/* LOGIN FORM */}
        <article
          className="card text-dark d-flex flex-column gap-3 justify-content-center align-items-center border border-3 border-white shadow rounded-4"
          style={{
            width: "30%",
            maxWidth: "650px",
            height: "60vh",
            maxHeight: "555px",
            marginTop: "50px",
            backgroundColor: "white",
          }}
        >
          <h2
            className="m-0 mt-3"
            style={{
              color: "#303030",
              fontWeight: "600",
              fontSize: "30px",
              lineHeight: "40px",
              justifyContent: "center",
              alignContent: "end",
            }}
          >
            Welcome Back
          </h2>

          {/* BOOTSTRAP FORM - FOR SIGN-IN */}
          <Form
            className="w-75 mt-2"
            style={{
              width: "400px",
              height: "310px",
            }}
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
              <Form.Label
                className="fw-semibold opacity-75"
                style={{ fontSize: "12px" }}
              >
                Email
              </Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text
                  id="inputGroupPrepend"
                  className="bg-transparent rounded-end-0 border-end-0"
                >
                  <img src={email_icon} alt="" height={"17px"} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email ID or Username"
                  aria-describedby="inputGroupPrepend"
                  className="fw-semibold opacity-75"
                  style={{ fontSize: "14px", height: "45px" }}
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
              <Form.Label
                className="fw-semibold opacity-75"
                style={{ fontSize: "12px" }}
              >
                Password
              </Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text
                  id="inputGroupPrepend"
                  className="bg-transparent rounded-end-0 border-end-0"
                >
                  {/* <img src={password_icon} alt="" height={"20px"} /> */}
                  <SlLock />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  className="fw-semibold opacity-75 bg-transparent"
                  style={{ fontSize: "14px", height: "45px" }}
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
                {/* <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback> */}
              </InputGroup>

              <Button
                variant="link"
                className=" position-absolute end-0 text-decoration-none text-danger"
                style={{
                  top: "50%",
                  transform: "translateY(-10%)",
                  color: "#F43899",
                  fontSize: "12px",
                }}
              >
                Forgot Password
              </Button>
            </Form.Group>

            {/* REMEMBER ME CHECKBOX */}
            <Form.Group
              className="mb-3 w-100 d-flex justify-content-end bord"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                name="rememberMe"
                type="checkbox"
                label="Remember me"
                className="fw-semibold"
                style={{ fontSize: "14px" }}
              />
            </Form.Group>

            {/* SIGN IN BUTTON */}
            {isLoading ? (
              <article className=" d-flex justify-content-center align-items-center">
                <article className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </article>
              </article>
            ) : (
              <Button
                type="submit"
                className="w-100"
                style={{
                  fontSize: "13px",
                  background: " #5932EA",
                  border: "1px solid  #5932EA",
                  height: "48px",
                }}
              >
                SIGN IN
              </Button>
            )}
          </Form>
        </article>

        {showToast && (
          <LoginSuccessToast variant={toastVariant} message={toastMessage} />
        )}
      </article>
    </section>
  );
};

export default Login;
