import React from "react";
import styled from "styled-components";

import User from "./User";
import Button from "../../Button";

const USERS_DATA = [
  {
    id: 1,
    imageUrl:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/12C45A78-82DA-497D-8077-737B55F6C39F.png",
    name: "XMegatronX",
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

const Users = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  border-top: 1px solid black;
  width: 250px;
`;

export default function WhoToFollow() {
  return (
    <div style={{ marginLeft: "2em" }}>
      <Title>Who to follow?</Title>
      <Users>
        {USERS_DATA.map(({ id, imageUrl, name, usersCount }) => (
          <User
            key={id}
            imageUrl={imageUrl}
            name={name}
            usersCount={usersCount}
          />
        ))}
      </Users>
      <Button>Discover All</Button>
    </div>
  );
}
