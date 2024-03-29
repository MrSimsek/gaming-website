import React from "react";
import styled from "styled-components";

import { numberWithSeperator } from "../../../utils/helpers";

import { ReactComponent as FollowIcon } from "../../../images/follow.svg";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Container = styled(Row)`
  margin: 0.5em 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.img`
  border-radius: 10px;
  width: 48px;
  margin-right: 1em;
`;

const UserDisplayName = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #ffffff;
`;

const TotalFollowers = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #6f747e;
  margin-top: 3px;
`;

const FollowButton = styled.button`
  border: none;
  background: none;
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  margin-right: 0.8em;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export default function User({ imageUrl, name, followersCount }) {
  return (
    <Container>
      <UserImage
        src={
          imageUrl
            ? imageUrl
            : "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"
        }
      />
      <Column>
        <UserDisplayName>{name ? `${name}` : "No Name"}</UserDisplayName>
        <TotalFollowers>
          {followersCount > 0 ? numberWithSeperator(followersCount, ".") : "No"}{" "}
          Followers
        </TotalFollowers>
      </Column>
      <FollowButton>
        <FollowIcon />
      </FollowButton>
    </Container>
  );
}
