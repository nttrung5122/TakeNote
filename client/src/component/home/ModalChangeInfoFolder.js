import { useRef, useState } from "react";
import {
  Modal,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { updateFolder } from "../../axios/services";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../store/selector";

function ModalChangeInfoFolder({ setShow, show, getData ,idFolder}) {
  const [title, setTitle] = useState("");
  const token = useSelector(tokenSelector);
  const handleClose = () => {
    setTitle("");
    setShow(false);
  };

  const handleUpdateFolder = () => {
    updateFolder(token, {
      title,
      idFolder
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
        <Modal.Title>Change Info Folder</Modal.Title>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateFolder}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalChangeInfoFolder;
