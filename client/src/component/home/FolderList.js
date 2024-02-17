import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Folder from "./Folder";
import Profile from "./Profile";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector, tokenSelector } from "../../store/selector";
import { getAllFolders, createFolder } from "../../axios/services";
import ModalCreateFolder from "./ModalCreateFolder";
import ModalPassword from "./ModalPassword"
import ModalChangeInfoFolder from "./ModalChangeInfoFolder";

function FolderList({ data }) {
  const user = useSelector(userSelector);
  const [showModalCreateFolder, setShowModalCreateFolder] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [showModalChangeInfo, setShowModalChangeInfo] = useState(false);
  const idFolderChangeInfo = useRef("");
  const token = useSelector(tokenSelector);
  const [listFolder, setListFolder] = useState([]);


  const getData = () => {
    getAllFolders(token)
      .then((res) => {
        console.log(res.data);
        setListFolder(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleChangeInfo = (idFoler)=>{
    setShowModalChangeInfo(true);
    idFolderChangeInfo.current = idFoler;
  }

  useEffect(() => {
    getData()
  },[]);

  return (
    <Container
      fluid
      style={{
        height: "100vh",
        backgroundColor: "",
        boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
      }}
    >
      <ModalCreateFolder
        setShow={setShowModalCreateFolder}
        show={showModalCreateFolder}
        getData={getData}
      />
      <ModalChangeInfoFolder
        setShow={setShowModalChangeInfo}
        show={showModalChangeInfo}
        getData={getData}
        idFolder={idFolderChangeInfo.current}
      />
      <ModalPassword setShow={setShowModalPassword}  show={showModalPassword} />
      <Row style={{ height: "100%", backgroundColor: "" }}>
        <Col
          xs={2}
          style={{
            backgroundColor: "#f0f0f0",
            maxHeight: "100%",
            zIndex: "999",
          }}
          className="d-flex flex-column  p-3 "
        >
          <div
            className="d-flex justify-content-between  pb-3 mb-3 border-bottom"
            style={{ height: "6vh" }}
          >
            <Profile user={user} />

            <button
              className="btn shadow-sm"
              style={{ backgroundColor: "#000" }}
              type="button"
              onClick={()=>{
                setShowModalCreateFolder(true)
              }}
            >
              <i className="bi bi-folder-plus" style={{ color: "#fff" }} />
            </button>
          </div>
          <div className="overflow-y-scroll" style={{ height: "94vh" }}>
            {listFolder.map((folder) => {
              return <Folder key={folder._id} folder={folder}  setShowModalPassword={setShowModalPassword} reload={getData} handleChangeInfo={handleChangeInfo}/>;
            })}
          </div>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
}

export default FolderList;
