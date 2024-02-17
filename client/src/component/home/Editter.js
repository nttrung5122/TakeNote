import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ReactQuill from "react-quill";
import {
  userSelector,
  tokenSelector,
  passwordFolderSelector,
} from "../../store/selector";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, saveNote, deleteNote } from "../../axios/services";
import "react-quill/dist/quill.snow.css";
import { useOutletContext } from "react-router-dom";

function Note({ data, name }) {
  const navigate = useNavigate();
  const [reset, setReset] = useOutletContext();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState();
  const token = useSelector(tokenSelector);
  const { idNote } = useParams();
  const passwordFolder = useSelector(passwordFolderSelector);

  const handleOnChange = (e) => {
    setValue(e);
  };

  const getData = () => {
    getNote(token, { idNote, password: passwordFolder })
      .then((res) => {
        const date = new Date(res.data.createdAt);
        res.data.createdAt = date.toDateString();
        console.log(date);
        setNote(res.data);
        setTitle(res.data.title);
        setValue(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, [idNote]);

  const handleSaveNote = () => {
    saveNote(token, {
      title,
      content: value,
      password: passwordFolder,
      idNote: note._id,
    })
      .then(() => {
        getData();
        setReset(!reset);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteNote = () => {
    deleteNote(token, {
      idNote: note._id,
    })
      .then((res) => {
        console.log(res);
        navigate("../");
        setReset(!reset);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Col
        style={{ backgroundColor: "", maxHeight: "100%" }}
        className="p-3 flex-column flex-grow-1 tab-pane fade active show overflow-y-scroll"
        id="note1-listGroup2"
        role="tabpanel"
        tabIndex={0}
      >
        <div className="d-flex justify-content-between">
          <input
            type="text"
            className="form-control form-control-lg border-0"
            id="title-note1-listGroup2"
            placeholder=""
            value={title || "created"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button
            className="btn my-3 shadow-sm save-btn me-2"
            id="save-note1-listGroup2"
            type="button"
            onClick={handleSaveNote}
          >
            <i className="bi bi-floppy" />
          </button>
          <button
            className="btn my-3 shadow-sm trash-btn me-2"
            id="delete-note1-listGroup2"
            type="button"
            onClick={handleDeleteNote}
          >
            <i className="bi bi-trash3" />
          </button>
        </div>
        <hr className="mx-3" style={{ borderWidth: "0.5px" }} />
        <h6 className="mx-3 pb-3 border-bottom">
          <i className="bi bi-calendar3 me-2" />
          {note?.createdAt || "created"}
        </h6>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleOnChange}
        ></ReactQuill>
      </Col>
    </>
  );
}

export default Note;
