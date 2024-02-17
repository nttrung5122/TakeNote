import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector, useDispatch } from 'react-redux'
import authSlice from "../../store/authSlice"
import { useNavigate } from "react-router-dom";

function Profile({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
      };
      const handleMouseLeave = () => {
        setIsHover(false);
      };
    const handleLogout = () => {
      dispatch(authSlice.actions.setAccessToken("")) 
      dispatch(authSlice.actions.setUser(null)) 
      navigate("/login");

    }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="d-flex align-items-center link-body-emphasis text-decoration-none"
    >
      <i className="bi bi-person me-2" />
      <span className="fs-5 fw-semibold">{user && user.username}</span>
      {isHover && (
        <DropdownButton variant="" title="" drop="down" size="sm">
          {/* <Dropdown.Item onClick={() => {}}>Change Password</Dropdown.Item> */}
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      )}
    </div>
  );
}


export default Profile;