import React from "react";
import styled from "styled-components";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
  margin-right: 10px;
`;

const TotalUsers = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #6f747e;
  margin-top: 3px;
`;

const displayUserCount = count =>
  count % 1000 === 0 ? `${count / 1000}K` : count;

export default function Channel({ imageUrl, name, usersCount, isBoosted }) {
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
        <Row alignItems="center">
          <ChannelName>{name ? `#${name}` : "No Name"}</ChannelName>
          {isBoosted && <FaArrowAltCircleUp color="#4CD863" />}
        </Row>
        <TotalUsers>
          {usersCount > 0 ? displayUserCount(usersCount) : "No"} Users
        </TotalUsers>
      </Column>
    </Container>
  );
}
