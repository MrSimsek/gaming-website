import React from "react";
import styled from "styled-components";

import User from "./User";
import Button from "../../Button";
import { Column } from "../../../utils/flexbox";
import { USERS_DATA } from "../../../data/users";

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.28px;
  color: #f2f2f2;
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  border-top: 1px solid black;
  width: 100%;
`;

export default function WhoToFollow() {
  return (
    <Column style={{ marginLeft: "50px" }}>
      <Title>Who to follow?</Title>
      <Users>
        {USERS_DATA.map(({ id, imageUrl, name, followersCount }) => (
          <User
            key={id}
            imageUrl={imageUrl}
            name={name}
            followersCount={followersCount}
          />
        ))}
      </Users>
      <Button>Discover All</Button>
    </Column>
  );
}
