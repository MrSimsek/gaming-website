import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex: ${({ flex }) => (flex ? flex : "auto")};
`;

export const Row = styled(Flex)`
  display: flex;
  flex-direction: row;
`;

export const Column = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
