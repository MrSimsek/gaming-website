import React from "react";
import styled from "styled-components";

import Channel from "./Channel";
import Button from "../../Button";
import { Column } from "../../../utils/flexbox";
import { CHANNELS_DATA } from "../../../data/channels";

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
        {CHANNELS_DATA.map(({ id, imageUrl, name, usersCount, isBoosted }) => (
          <Channel
            key={id}
            imageUrl={imageUrl}
            name={name}
            usersCount={usersCount}
            isBoosted={isBoosted}
          />
        ))}
      </ChannelsContainer>
      <Button>Find more</Button>
    </Column>
  );
}
