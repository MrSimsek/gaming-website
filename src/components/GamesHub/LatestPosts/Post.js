import React from "react";
import styled from "styled-components";
import { FaRetweet, FaCommentAlt, FaHandPaper } from "react-icons/fa";
import { IoIosShare } from "react-icons/io";

const PostItem = styled.li`
  border-radius: 10px;
  background-color: #27272c;
  padding: 1em;
  width: 482px;
  margin: 0.5em 0;
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 10px;
  width: 48px;
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1em;
`;

const UserDisplayName = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #ffffff;
`;

const Username = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #0091ff;
  margin-right: 1em;
`;

const FollowerCount = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgba(235, 235, 245, 0.6);
`;

const CreatedTime = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: right;
  color: rgba(235, 235, 245, 0.3);
`;

const Content = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #f2f2f2;
`;

const ProBadge = styled.span`
  background-color: #ff4628;
  border-radius: 4px;
  font-size: 0.6em;
  color: white;
  padding: 2px 5px;
  margin-left: 10px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActionButton = styled.button`
  border: none;
  border: 2px solid #44484f;
  background: none;
  color: #44484f;
  border-radius: 10px;
  padding: 5px 6px;
  cursor: pointer;
  margin-right: 0.8em;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #ffb100;
    color: #ffb100;
  }
`;

const Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #646971;
`;

const CommentsCount = styled.span`
  margin-right: 1em;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: right;
  color: rgba(235, 235, 245, 0.6);
`;

export default function Post({
  imageSource,
  displayName,
  username,
  followerCount,
  isPro,
  commentsCount,
  excerpt
}) {
  return (
    <PostItem>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        <User>
          <ProfileImage
            src={
              imageSource
                ? imageSource
                : "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"
            }
          />
          <UserMeta>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}>
              <UserDisplayName>
                {displayName ? displayName : "John Doe"}
              </UserDisplayName>
              {isPro && <ProBadge>PRO</ProBadge>}
            </div>
            <div>
              <Username>@{username ? username : "johndoe"}</Username>
              <FollowerCount>
                {followerCount ? followerCount : "No"} followers
              </FollowerCount>
            </div>
          </UserMeta>
        </User>
        <CreatedTime>3hrs ago</CreatedTime>
      </div>
      <Content>{excerpt ? excerpt : "This is placeholder."}</Content>
      <Footer>
        <ActionButtons>
          <ActionButton>
            <FaRetweet size={20} />
          </ActionButton>
          <ActionButton>
            <IoIosShare size={20} />
          </ActionButton>
          <ActionButton>
            <FaHandPaper size={20} />
          </ActionButton>
        </ActionButtons>
        <Comments>
          {commentsCount > 0 ? (
            <CommentsCount>{commentsCount} Comments</CommentsCount>
          ) : (
            <CommentsCount>Add your comment</CommentsCount>
          )}
          <FaCommentAlt size={15} />
        </Comments>
      </Footer>
    </PostItem>
  );
}
