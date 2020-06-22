import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <SearchBar />
      <Navbar />
    </HeaderContainer>
  );
}
