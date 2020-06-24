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
  margin: 1em auto;
  flex: 1;
`;

const NavLink = styled.a`
  margin: 0 1em;
  cursor: pointer;
  color: #8e8e93;

  &:hover {
    color: #0091ff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink href="#">
        <FaUserAlt size={20} />
      </NavLink>
      <NavLink href="#">
        <FaWallet size={20} />
      </NavLink>
      <NavLink href="#">
        <FaBell size={20} />
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
