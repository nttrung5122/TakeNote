import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import * as constant from "../../constant";

function ForgotPasswordForm({setForm}) {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="vh-100 bg-secondary">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                    <FloatingLabel
                      label="Username"
                      className="form-outline mb-4 text-black"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FloatingLabel>

                    <Link to="/dashboard">
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Get OTP
                      </button>
                    </Link>
                  </div>

                  <div>
                    <p className="mb-0">
                      <button onClick={() => {
                          setForm(constant.LOGIN_FORM);
                        }} className="text-white-50 fw-bold">
                        Sign in
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPasswordForm;
