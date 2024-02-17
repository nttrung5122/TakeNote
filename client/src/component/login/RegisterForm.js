import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import * as constant from "../../constant";
import { Button, Form, InputGroup } from "react-bootstrap";
import { register } from "../../axios/services";
import { ToastContainer, toast,Bounce } from 'react-toastify';
function RegisterForm({ setForm }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");
  const [validated, setValidated] = useState(false);
  const handleRegister = (event) => {
    // Xử lý logic đăng nhập ở đây
    event.preventDefault();
    const form = event.currentTarget;

    setValidated(true);
    if (form.checkValidity()) {
      const data = {
        username,
        email,
        password,
      };
      register(data)
        .then((res) => {
          console.log(res);
          toast("succes", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          
        })
        .catch((err) => {
          toast("Username or email already use", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        });
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleEmailOnChange = (e) => {};
  return (
    <>
      <Form
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
        noValidate
        validated={validated}
        onSubmit={handleRegister}
      >
        <section
          className="d-flex flex-column p-4 rounded-4 align-items-center "
          style={{ maxWidth: "350px", background: "#fff" }}
        >
          <h1 style={{ color: "royalblue" }}>Register</h1>
          <p>Signup now and get full access to our app.</p>
          <FloatingLabel
            label="Username"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              type="text"
              placeholder=""
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a username.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            label="Email address"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              type="email"
              placeholder=""
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a email or your eamil invalid.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            label="Password"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              required
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            label="Confirm password"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              type="password"
              placeholder=""
              value={passwordComfirm}
              onChange={(e) => {
                setPasswordComfirm(e.target.value);
              }}
              isInvalid={passwordComfirm !== password}
              isValid={passwordComfirm === password}
            />
            <Form.Control.Feedback type="invalid">
              Password is'n same
            </Form.Control.Feedback>
          </FloatingLabel>
          <Button
            className="mb-3"
            style={{ width: "100%" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <p>
            Already have an acount ?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setForm(constant.LOGIN_FORM);
              }}
            >
              Signin
            </a>{" "}
          </p>
        </section>
      </Form>
    </>
  );
}

export default RegisterForm;
