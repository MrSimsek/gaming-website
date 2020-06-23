import React from "react";
import styled from "styled-components";

import Channel from "./Channel";
import Button from "../../Button";
import { Column } from "../../../utils/flexbox";

const CHANNELS_DATA = [
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

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.28px;
  color: #f2f2f2;
`;

const ChannelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  border-top: 1px solid black;
  width: 100%;
`;

export default function Channels() {
  return (
    <Column style={{ marginLeft: "50px" }} alignItems="flex-start">
      <Title>Channels</Title>
      <ChannelsContainer>
        {CHANNELS_DATA.map(({ id, imageUrl, name, usersCount }) => (
          <Channel
            key={id}
            imageUrl={imageUrl}
            name={name}
            usersCount={usersCount}
          />
        ))}
      </ChannelsContainer>
      <Button>Find more</Button>
    </Column>
  );
}
