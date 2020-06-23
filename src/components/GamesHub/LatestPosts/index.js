import React from "react";
import styled from "styled-components";

import Post from "./Post";

const POSTS_DATA = [
  {
    id: 1,
    displayName: "MrPaladin",
    imageSource:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/09885C1F-5D94-40E8-BA5E-3712DA4532BC.png",
    username: "mrpaladin",
    isPro: false,
    followerCount: 15,
    commentsCount: 12
  },
  {
    id: 2,
    displayName: "LeroyJenkins",
    imageSource:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/A88B588B-0EA6-429D-BBCB-03C0C9DA1519.png",
    username: "leroyjenkins",
    isPro: true,
    followerCount: 3253,
    commentsCount: 0
  },
  {
    id: 3,
    displayName: "ONYXSnake1223",
    imageSource:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/9C0ADF98-916B-42F7-99BC-A5FA3C53AE30.png",
    username: "ONYXSnake1223",
    isPro: true,
    followerCount: 125,
    commentsCount: 156
  }
];

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
    <div>
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
    </div>
  );
}
