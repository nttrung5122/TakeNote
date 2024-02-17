import { createContext, useState } from "react";
import {
  LoginForm,
  RegisterForm,
  ForgotPasswordForm,
} from "../component/login";
import * as constant from "../constant";
import { ToastContainer, toast, Bounce } from "react-toastify";

function LoginPage() {
  const [form, setForm] = useState(constant.LOGIN_FORM);
  return (
    <>
      <section style={{ backgroundColor: "#e8e8e8", height: "100vh" }}>
        {(form == constant.LOGIN_FORM && <LoginForm setForm={setForm} />) ||
          (form == constant.REGISTER_FORM && (
            <RegisterForm setForm={setForm} />
          )) ||
          (form == constant.FORGOT_PASSWORD_FORM && (
            <ForgotPasswordForm setForm={setForm} />
          ))}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </section>
    </>
  );
}

export default LoginPage;
