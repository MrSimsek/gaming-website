import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import TabsComponent from "./Tabs";

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
  background-color: #dadada;
  border-radius: 10px;
  position: absolute;
  top: 25px;
  left: 25px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <SiteLogo />
      <Container>
        <SearchBar />
        <Navbar />
      </Container>
      <TabsComponent />
    </HeaderContainer>
  );
}
