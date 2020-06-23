import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameImage = styled.img`
  width: 192px;
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

const GamePrice = styled.p``;
const GamePriceDiscount = styled.p``;

const PreOrderButton = styled.button``;

export default function UpcomingGame({ imageUrl, name }) {
  return (
    <Column>
      <GameImage src={imageUrl} />
      <GameName>{name}</GameName>
      <GamePrice>12</GamePrice>
      <GamePriceDiscount>12</GamePriceDiscount>
      <PreOrderButton>Pre Order</PreOrderButton>
    </Column>
  );
}
