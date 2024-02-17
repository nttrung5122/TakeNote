import { useCallback, useRef, useState } from "react";
import {
  Row,
  Col,
  Container,
  Modal,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { createFolder } from "../../axios/services";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector ,idFolderSelector} from "../../store/selector";
import folderSlide from "../../store/folderSlide";
import { useNavigate } from "react-router-dom";

function ModalPassword({ setShow, show, getData }) {
  const [password, setPassword] = useState("");
  const idFolder = useSelector(idFolderSelector)
  const handleClose = () => {
    setShow(false);
    setPassword("");
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    setShow(false);
    dispatch(folderSlide.actions.setPassword(password));
    navigate(idFolder)
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <FloatingLabel
              label="Password"
              className="mb-3"
              style={{ width: "100%" }}
            >
              <Form.Control
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="false"
              />
            </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPassword;
