import React from "react";
import styled from "styled-components";

import Post from "./Post";
import { Column } from "../../../utils/flexbox";
import { POSTS_DATA } from "../../../data/latest-posts";

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.28px;
  color: #f2f2f2;
`;

const Posts = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export default function LatestPosts() {
  return (
    <Column flex="2">
      <Title>Latest posts</Title>
      <Posts>
        {POSTS_DATA.map(post => (
          <Post
            key={post.id}
            displayName={post.displayName}
            imageSource={post.imageSource}
            username={post.username}
            followerCount={post.followerCount}
            commentsCount={post.commentsCount}
            isPro={post.isPro}
          />
        ))}
      </Posts>
    </Column>
  );
}
