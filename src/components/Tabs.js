import React from "react";
import styled from "styled-components";

import homeIcon from "../images/home.svg";
import socialIcon from "../images/games.svg";
import marketIcon from "../images/market.svg";
import tournamentsIcon from "../images/tournaments.svg";

const Section = styled.section`
  background-color: #151517;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
`;

const Tab = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 269px;
  cursor: pointer;
  background-image: ${({ isActive }) =>
    isActive
      ? "linear-gradient(to bottom, #39393f, rgba(34, 34, 37, 0)), linear-gradient(to bottom, #1c1c1e, #1c1c1e)"
      : "none"};
  border-top: ${({ isActive, color }) =>
    isActive ? `1px solid ${color}` : "1px solid #151517"};
  transition: all 0.2s ease-in-out;
`;

const TabImage = styled.img``;

const TabTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.09px;
  text-align: center;
  color: #ffffff;
  margin-left: 1em;
`;

const TabItem = ({ icon, title, active, color, onClickHandler, image }) => (
  <Tab isActive={active} color={color} onClick={onClickHandler}>
    <TabImage src={image} />
    <TabTitle>{title}</TabTitle>
  </Tab>
);

export default function TabsComponent() {
  const [activeTab, setActiveTab] = React.useState("home");

  return (
    <Section>
      <Container>
        <Tabs>
          <TabItem
            color="#0091ff"
            active={activeTab === "home"}
            title="Home"
            image={homeIcon}
            onClickHandler={() => setActiveTab("home")}
          />
          <TabItem
            color="#f7b500"
            active={activeTab === "social"}
            title="Social"
            image={socialIcon}
            onClickHandler={() => setActiveTab("social")}
          />
          <TabItem
            color="#e02020"
            active={activeTab === "market"}
            title="Market"
            image={marketIcon}
            onClickHandler={() => setActiveTab("market")}
          />
          <TabItem
            color="#fa6400"
            active={activeTab === "tournements"}
            title="Tournements"
            image={tournamentsIcon}
            onClickHandler={() => setActiveTab("tournements")}
          />
        </Tabs>
      </Container>
    </Section>
  );
}
