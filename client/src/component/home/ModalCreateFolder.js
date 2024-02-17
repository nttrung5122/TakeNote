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
import { useSelector } from "react-redux";
import { tokenSelector } from "../../store/selector";

function ModalCreateFolder({ setShow, show, getData }) {
  const [title, setTitle] = useState("");
  const [havePassword, setHavePassword] = useState(false);
  const [password, setPassword] = useState("");
  const token = useSelector(tokenSelector);

  const formCheck = useRef();
  const handleClose = () => {
    setHavePassword(false);
    setPassword("");
    setTitle("");
    setShow(false);
  };

  const handleCreateFolder = () => {
    createFolder(token, {
      title,
      password: password !== "" ? password : null,
    })
      .then((res) => res.data)
      .then((res) => {
        getData();
        setShow(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel
            label="Title"
            className="mb-3"
            style={{ width: "100%" }}
          >
            <Form.Control
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
              autoComplete="false"
            />
          </FloatingLabel>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Have Password"
            ref={formCheck}
            onChange={() => {
              setHavePassword(!havePassword);
              setPassword("");
            }}
          />
          {havePassword && (
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
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateFolder}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCreateFolder;
