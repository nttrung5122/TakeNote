import { Container } from "react-bootstrap";
import { FolderList } from "../component/home";

import { useSelector } from "react-redux";
import { userSelector } from "../store/selector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import instance from "../axios";
import { ToastContainer, toast, Bounce } from "react-toastify";


function Dashboard() {
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(user)
    if (!user) {
      navigate("/login");
    }
  },[])


  return (
    <>
      <section style={{ backgroundColor: "" }}>
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
        <FolderList></FolderList>
      </section>
    </>
  );
}

export default Dashboard;
