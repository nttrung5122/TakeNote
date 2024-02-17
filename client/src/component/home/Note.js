import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";

function Note({ note }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const { idNote } = useParams();
  return (
    <div
      className="  p-3   d-flex align-items-center border-bottom "
      style={{
        backgroundColor: note?._id == idNote ? "#14213D" : "",
        color: note?._id == idNote ? "#fff" : "#000",
        cursor: "pointer",
        fontSize: "22px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        navigate(note?._id||"");
      }}
    >
      <span>{note?.title}</span>
    </div>
  );
}

export default Note;
