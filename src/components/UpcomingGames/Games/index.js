import React from "react";
import styled from "styled-components";

import Game from "./Game";
import Button from "../../Button";

import { GAMES_DATA } from "../../../data/upcoming-games";

const Games = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 2em;
`;

const LoadMoreButton = styled(Button)`
  margin: 1em auto;
  margin-top: 31px;
  padding: 1em;
  width: 218px;
`;

export default function GamesContainer() {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    setGames(GAMES_DATA);
  }, []);

  return (
    <>
      <Games>
        {games.map(game => (
          <Game key={game.id} name={game.name} imageUrl={game.imageUrl} />
        ))}
      </Games>
      <LoadMoreButton>LOAD MORE</LoadMoreButton>
    </>
  );
}
