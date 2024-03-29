import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
  background-color: #1c1c1e;
  margin: auto;
  width: 90%;
  max-width: 1200px;
  position: relative;
`;

const Container = styled.div`
  margin-left: auto;
  max-width: 1050px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SiteLogo = styled.div`
  width: 90px;
  height: 90px;
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  top: 1em;
  left: 28px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <SiteLogo />
        <SearchBar />
        <Navbar />
      </Container>
    </HeaderContainer>
  );
}
