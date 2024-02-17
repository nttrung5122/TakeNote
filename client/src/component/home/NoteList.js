import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Note from "./Note";
import { startTransition, useEffect, useState, useMemo } from "react";
import {
  userSelector,
  tokenSelector,
  passwordFolderSelector,
} from "../../store/selector";
import { useSelector } from "react-redux";
import { getNotesInFolders, createNote } from "../../axios/services";
import { toast } from "react-toastify";

function NoteList({}) {
  const [reset,setReset] = useState(true);
  const { idFolder } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [listNote, setListNote] = useState(null);
  const token = useSelector(tokenSelector);
  const passwordFolder = useSelector(passwordFolderSelector);
  const navigate = useNavigate();

  const handleSearchTextOnChange = (event) => {
    setSearchInput(event.target.value);
    startTransition(() => {
      setSearchFilter(event.target.value);
    });
  };

  const getData = () => {
    getNotesInFolders(token, { idFolder, password: passwordFolder })
      .then((res) => {
        console.log(res.data);
        setListNote(res.data);
      })
      .catch((err) => {
        toast(err.response.data);
        navigate("../");
      });
  };

  useEffect(() => {
    getData()
  }, [idFolder,reset]);

  const handleCreateNote = () => {
    createNote(token, {folder:idFolder, password:passwordFolder}).then(()=>{
      getData();
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Col
        xs={3}
        style={{
          backgroundColor: "#fff",
          maxHeight: "100%",
          paddingLeft: "0",
          paddingRight: "0",
        }}
        className="d-flex flex-column shadow-sm"
      >
        <div className="d-flex justify-content-between border-bottom">
          <a
            href="#"
            className="d-flex align-items-center p-3 link-body-emphasis text-decoration-none nocursor"
          >
            <i className="bi bi-journal me-2" />
            <span className="fs-5 fw-semibold">Notes List</span>
          </a>
          <button
            className="btn my-3 mx-3 shadow-sm"
            type="button"
            style={{ backgroundColor: "#000" }}
            onClick={handleCreateNote}
          >
            <i className="bi bi-file-earmark-plus" style={{ color: "#fff" }} />
          </button>
        </div>
        <div className="input-group flex-nowrap p-3 border-bottom">
          <span className="input-group-text shadow-sm">
            <i className="bi bi-search" />
          </span>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search"
            aria-label="SearchInput"
            aria-describedby="addon-wrapping"
            value={searchInput}
            onChange={handleSearchTextOnChange}
          />
        </div>
        <div className="overflow-y-scroll">
          {listNote &&
            listNote.map((note) => {
              return <Note key={note._id} note={note} />;
            })}
        </div>
      </Col>
      <Outlet context={[reset,setReset]}/>
    </>
  );
}

export default NoteList;
