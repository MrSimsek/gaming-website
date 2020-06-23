import React from "react";
import styled from "styled-components";

import { Row, Column } from "../utils/flexbox";
import SiteLinks from "./SiteLinks";

import playStoreIcon from "../images/play-store-icon.svg";
import appStoreIcon from "../images/app-store-icon.svg";

const Footer = styled.footer`
  background-color: #151517;
`;

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const AppImage = styled.div`
  height: 69px;
  width: 69px;
  background-color: black;
  border-radius: 10px;
`;

const AppMeta = styled(Column)`
  margin-left: 1em;
  max-width: 172px;
`;

const InstallAppTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #a6a6a6;
  margin-bottom: 12px;
`;

const InstallAppSubTitle = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -0.21px;
  color: #a6a6a6;
`;

const StoreLinkText = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -0.21px;
  color: #a6a6a6;
  margin-top: 12px;
`;

const LA3EB_LINKS = [
  { id: 1, title: "About Us", href: "#" },
  { id: 2, title: "Careers", href: "#" },
  { id: 3, title: "Newsroom", href: "#" },
  { id: 4, title: "Contact", href: "#" }
];

const HELP_LINKS = [
  { id: 1, title: "Support Hub", href: "#" },
  { id: 2, title: "How to activate Games", href: "#" },
  { id: 3, title: "Terms & Conditions", href: "#" },
  { id: 4, title: "Privacy & Cookies", href: "#" },
  { id: 5, title: "Returns & Refunds", href: "#" }
];

const BUSINESS_LINKS = [
  { id: 1, title: "Business Center", href: "#" },
  { id: 2, title: "Selling on  La3eb", href: "#" },
  { id: 3, title: "Developer & Publisher", href: "#" },
  { id: 4, title: "Marketing Partnership", href: "#" }
];

const InstallApp = () => (
  <Row>
    <AppImage />
    <AppMeta>
      <InstallAppTitle>Install the app</InstallAppTitle>
      <InstallAppSubTitle>
        Get great deals on games wherever you go!
      </InstallAppSubTitle>
    </AppMeta>
  </Row>
);

const StoreLinks = () => (
  <Row>
    <Column>
      <img src={playStoreIcon} />
      <StoreLinkText>
        Get it on <br /> Google Play©
      </StoreLinkText>
    </Column>
    <Column>
      <img src={appStoreIcon} />
      <StoreLinkText>
        Download on the <br /> App Store®
      </StoreLinkText>
    </Column>
  </Row>
);

export default function FooterComponent() {
  return (
    <Footer>
      <Container>
        <Row>
          <SiteLinks title="LA3EB" links={LA3EB_LINKS} />
          <SiteLinks title="HELP" links={HELP_LINKS} />
          <SiteLinks title="BUSINESS" links={BUSINESS_LINKS} />
          <InstallApp />
          <StoreLinks />
        </Row>
      </Container>
    </Footer>
  );
}
