import React from "react";
import styled from "styled-components";

import LatestPosts from "./LatestPosts";
import Channels from "./Channels";
import WhoToFollow from "./WhoToFollow";

import Button from "../Button";

const Section = styled.section`
  margin: 2em auto;
  width: 90%;
  max-width: 1200px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px #343436;
  padding-bottom: 18px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: -0.5px;
  color: #f7b500;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.33;
  letter-spacing: -0.19px;
  color: #c5d2e3;
  margin-left: 38px;
  opacity: 0.5;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const DiscoverAllButton = styled(Button)`
  margin-left: auto;
`;

export default function GamesHub() {
  return (
    <Section>
      <Head>
        <Title>Games Hub</Title>
        <Subtitle>
          The best offers, new games, AAA titles and high-quality video games..
        </Subtitle>
        <DiscoverAllButton>Discover All</DiscoverAllButton>
      </Head>
      <Body>
        <LatestPosts />
        <Channels />
        <WhoToFollow />
      </Body>
    </Section>
  );
}
