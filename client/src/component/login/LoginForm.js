import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import * as constant from "../../constant";
import { useSelector, useDispatch } from 'react-redux'
import authSlice from "../../store/authSlice"
import {login} from "../../axios/services"
import { ToastContainer, toast ,Bounce} from 'react-toastify';


function LoginForm({ setForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây

    console.log("Đăng nhập với email:", username, "và password:", password);
    login({ username: username, password: password })
      .then((response)=>{
        return response.data
      }).then((response)=>{
        dispatch(authSlice.actions.setUser(response.user)) 
        dispatch(authSlice.actions.setAccessToken(response.accessToken)) 
        navigate("/");
      }).catch((error)=>{
        console.log("e",error);
        toast("username or password is incorrect");
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <section
          className="d-flex flex-column p-4 rounded-4 align-items-center "
          style={{ maxWidth: "350px", background: "#fff" }}
        >
          <h1 style={{ color: "royalblue" }}>Login</h1>
          <p>Signup now and get full access to our app.</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control type="text" placeholder=""  
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
            />
          </FloatingLabel>
          <Button
            onClick={handleLogin}
            className="mb-3"
            style={{ width: "100%" }}
            variant="primary"
          >
            Submit
          </Button>
          <p>
            No account?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setForm(constant.REGISTER_FORM);
              }}
            >
              Sign up
            </a>{" "}
          </p>
        </section>
      </div>
    </>
  );
}

export default LoginForm;
