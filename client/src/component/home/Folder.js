import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import folderSlide from "../../store/folderSlide";
import { deleteFolder } from "../../axios/services";
import { tokenSelector } from "../../store/selector";

function Folder({ folder, setShowModalPassword, reload, handleChangeInfo }) {
  const { idFolder } = useParams();

  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleDeleteFolder = () => {
    deleteFolder(token, {
      idFolder: folder._id,
    })
      .then((res) => {
        console.log(res);
        reload();
        if (idFolder === folder._id) {
          navigate("../");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Row
        className=" rounded-3 mb-2 p-1"
        style={{
          backgroundColor:
            folder._id == idFolder ? "#ffc972" : isHover ? "#fff" : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Col
          className="d-flex align-items-center"
          style={{
            textDecoration: "none",
            color: "#000",
            cursor: "pointer",
            fontSize: "22px",
          }}
          onClick={() => {
            if (idFolder === folder._id) {
              return;
            }
            if (!folder.havePassword) {
              navigate(folder._id);
              dispatch(folderSlide.actions.setPassword(""));
              dispatch(folderSlide.actions.setIdFolder(folder._id));
            } else {
              dispatch(folderSlide.actions.setIdFolder(folder._id));
              setShowModalPassword(true);
            }
          }}
        >
          <i className="bi bi-folder2 me-3" />
          <span>{folder.title}</span>
        </Col>
        {isHover && (
          <Col xs="2">
            <DropdownButton variant="" title="" drop="down" size="sm">
              <Dropdown.Item onClick={handleDeleteFolder}>Delete</Dropdown.Item>
              <Dropdown.Item onClick={() => {handleChangeInfo(folder._id)}}>Change Info</Dropdown.Item>
            </DropdownButton>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Folder;
