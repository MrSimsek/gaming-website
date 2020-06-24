import React from "react";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";

const Section = styled.section`
  background-color: #2e0f53;
`;

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GetDealsText = styled.span`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.46px;
  color: #f2f2f2;
`;

const EmailInput = styled.input`
  border: none;
  border-radius: 6px;
  background-color: #111113;
  width: 440px;
  height: 44px;
  padding-left: 38px;

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: -0.36px;
  color: rgba(235, 235, 245, 0.6);
`;

const SubscribeButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #0a84ff;

  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: center;
  color: #ffffff;

  height: 44px;
  width: 166px;

  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Section>
      <Container>
        <GetDealsText>Get your best games deals first</GetDealsText>
        <div style={{ position: "relative" }}>
          <EmailInput type="text" placeholder="Enter your email" />
          <IoMdMail
            size={20}
            style={{ position: "absolute", left: "10", top: "11" }}
            color="#4f4f53"
          />
        </div>
        <SubscribeButton>Subscribe</SubscribeButton>
      </Container>
    </Section>
  );
}
