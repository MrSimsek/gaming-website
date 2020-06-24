import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchInputContainer = styled.div`
  position: relative;
  flex: 2;
  margin: 1em auto;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #111113;
  border-radius: 6px;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  color: #8e8e93;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: -0.36px;
  width: 100%;
`;

export default function SearchBar() {
  return (
    <SearchInputContainer>
      <SearchInput
        type="text"
        placeholder="Search games, gears, accessories.."
      />
      <FiSearch
        style={{ position: "absolute", right: 10, top: 10 }}
        color="#8e8e93"
        size={25}
      />
    </SearchInputContainer>
  );
}
