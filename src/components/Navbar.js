import React from "react";
import styled from "styled-components";
import {
  FaUserAlt,
  FaWallet,
  FaBell,
  FaHeart,
  FaShoppingBag
} from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  margin-left: 2em;
  flex: 1;
`;

const NavLink = styled.a`
  margin: 0 1em;
  cursor: pointer;
  color: ${({ active }) => (active ? "#0091ff" : "#414347")};
  position: relative;

  &:hover {
    color: #0091ff;
  }
`;

const Badge = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  border: 1px solid #1c1c1e;
  background-color: #0091ff;
  position: absolute;
  top: 2px;
  right: 1px;
`;

function Navbar() {
  const [hasNotifications, setHasNotifications] = React.useState(true);

  const closeNotifications = () => setHasNotifications(false);

  return (
    <Nav>
      <NavLink href="#" active>
        <FaUserAlt size={20} />
      </NavLink>
      <NavLink href="#">
        <FaWallet size={20} />
      </NavLink>
      <NavLink href="#" onClick={closeNotifications}>
        <FaBell size={20} />
        {hasNotifications && <Badge />}
      </NavLink>
      <NavLink href="#">
        <FaHeart size={20} />
      </NavLink>
      <NavLink href="#">
        <FaShoppingBag size={20} />
      </NavLink>
    </Nav>
  );
}

export default Navbar;
