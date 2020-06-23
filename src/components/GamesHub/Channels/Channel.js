import React from "react";
import styled from "styled-components";

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

const ChannelImage = styled.img`
  border-radius: 10px;
  width: 48px;
  margin-right: 1em;
`;

const ChannelName = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #ffffff;
`;

const TotalUsers = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #6f747e;
`;

const displayUserCount = count =>
  count % 1000 === 0 ? `${count / 1000}K` : count;

export default function Channel({ imageUrl, name, usersCount }) {
  return (
    <Container>
      <ChannelImage
        src={
          imageUrl
            ? imageUrl
            : "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"
        }
      />
      <Column>
        <ChannelName>{name ? `#${name}` : "No Name"}</ChannelName>
        <TotalUsers>
          {usersCount > 0 ? displayUserCount(usersCount) : "No"} Users
        </TotalUsers>
      </Column>
    </Container>
  );
}
