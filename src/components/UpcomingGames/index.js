import React from "react";
import styled from "styled-components";

import Games from "./Games";

import Button from "../Button";

const Section = styled.section`
  background-color: #17171a;
`;

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 2em;
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
  color: #f2f2f2;
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
  flex-direction: column;
`;

const DiscoverAllButton = styled(Button)`
  margin-left: auto;
`;

export default function UpcomingGames() {
  return (
    <Section>
      <Container>
        <Head>
          <Title>Upcoming Games</Title>
          <Subtitle>
            Pre-order an upcoming game to start playing on Day 1.
          </Subtitle>
          <DiscoverAllButton>Discover All</DiscoverAllButton>
        </Head>
        <Body>
          <Games />
        </Body>
      </Container>
    </Section>
  );
}
