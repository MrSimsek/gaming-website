import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #0a84ff;
  display: block;

  border-radius: 5px;
  border: solid 1px #0a84ff;

  padding: 0.5em 1.5em;

  transition: all 0.1s ease-in-out;

  &:hover {
    color: white;
    background-color: #0a84ff;
  }
`;

export default Button;
