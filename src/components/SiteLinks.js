import React from "react";
import styled from "styled-components";

import { Column } from "../utils/flexbox";

const ListContainer = styled(Column)`
  margin-right: 5em;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #a6a6a6;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const LinkItem = styled.li``;

const Link = styled.a`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.23;
  letter-spacing: -0.21px;
  color: #a6a6a6;

  text-decoration: none;
`;

export default function SiteLinks({ title, links }) {
  return (
    <ListContainer>
      <Title>{title ? title : "Title"}</Title>
      <LinksList>
        {links &&
          links.length > 0 &&
          links.map(link => (
            <LinkItem key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </LinkItem>
          ))}
      </LinksList>
    </ListContainer>
  );
}
