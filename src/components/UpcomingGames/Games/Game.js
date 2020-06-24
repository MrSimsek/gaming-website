import React from "react";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Game = styled(Column)`
  flex: 1;
  min-width: 192px;
  justify-content: space-between;
  position: relative;
`;

const GameImage = styled.img`
  width: 100%;
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

const FavoriteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  opacity: 0.8;
  display: inline-flex;
  align-items: center;
`;

export default function UpcomingGame({ imageUrl, name }) {
  const [isFavorited, setIsFavorited] = React.useState(true);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  return (
    <Game>
      <FavoriteButton onClick={toggleFavorite}>
        {isFavorited ? (
          <BsHeartFill size={25} color="#fff" />
        ) : (
          <BsHeart size={25} color="#fff" />
        )}
      </FavoriteButton>
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
