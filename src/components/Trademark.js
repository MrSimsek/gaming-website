import React from "react";
import styled from "styled-components";

import { Row } from "../utils/flexbox";

import visaLogo from "../images/visa.svg";
import mastercardLogo from "../images/mastercard.svg";
import paypalLogo from "../images/paypal.svg";

const Section = styled.section`
  background-color: #000000;
`;

const Container = styled(Row)`
  margin: auto;
  width: 90%;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const Copyright = styled.span`
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.18px;
  color: #a6a6a6;
  opacity: 0.5;
  max-width: 492px;
`;

const PartnerLogo = styled.img`
  margin: 15px;
`;

export default function Trademark() {
  return (
    <Section>
      <Container justifyContent="space-between" alignItems="center">
        <Copyright>
          Copyright © 2020. All Rights Reserved. Use of this Web site
          constitutes acceptance of the Terms and Conditions and Privacy policy.
          All copyrights, trade marks, service marks belong to the corresponding
          owners.
        </Copyright>
        <Row alignItems="center" justifyContent="flex-end">
          <PartnerLogo src={visaLogo} />
          <PartnerLogo src={mastercardLogo} />
          <PartnerLogo src={paypalLogo} />
        </Row>
      </Container>
    </Section>
  );
}
