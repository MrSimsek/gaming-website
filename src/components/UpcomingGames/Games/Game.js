import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Game = styled(Column)`
  margin: 1em;
`;

const GameImage = styled.img`
  width: 192px;
  border-radius: 10px;
`;

const GameName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.22px;
  color: #ffffff;
`;

const GamePrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: rgba(235, 235, 245, 0.6);
`;

const OriginalPrice = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  color: rgba(235, 235, 245, 0.4);
`;
const DiscountPercentage = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: -0.9px;
  color: #a335ef;
  margin-left: 1em;
`;

const PreOrderButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #0a84ff;
  color: #fff;
  padding: 1em;
  margin-top: 1em;
  cursor: pointer;
`;

export default function UpcomingGame({ imageUrl, name }) {
  return (
    <Game>
      <GameImage
        src={
          imageUrl
            ? imageUrl
            : "https://external-preview.redd.it/aQmYMVZ2p8MxFkv9DjpTh6RQAbBr35wZsX4GvRQDqMU.png?auto=webp&s=2edad738c9ca56048d3960c296be6eb8c40c05bb"
        }
      />
      <GameName>{name ? name : "Game Name"}</GameName>
      <GamePrice>€22.50</GamePrice>
      <Row>
        <OriginalPrice>€22.50</OriginalPrice>
        <DiscountPercentage>62% OFF</DiscountPercentage>
      </Row>
      <PreOrderButton>Pre Order</PreOrderButton>
    </Game>
  );
}
