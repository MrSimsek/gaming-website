import React from "react";
import styled from "styled-components";

import Game from "./Game";

const GAMES_DATA = [
  {
    id: 1,
    imageUrl:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/EC8DB7C7-9585-4860-B9A3-2309948609B7.png",
    name: "social Hub",
    usersCount: 195000
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/D4DFF02B-BCAA-4F5A-8F42-C4C323C51DA9.png",
    name: "Fortnite",
    usersCount: 240000
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/EC8DB7C7-9585-4860-B9A3-2309948609B7.png",
    name: "World of War Craft",
    usersCount: 195000
  }
];

const Games = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
`;

export default function GamesContainer() {
  return (
    <Games>
      <Game />
      <Game />
    </Games>
  );
}
