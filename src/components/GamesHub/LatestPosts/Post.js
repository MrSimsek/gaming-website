import React from "react";
import styled from "styled-components";

import { numberWithK } from "../../../utils/helpers";

import { ReactComponent as ClapIcon } from "../../../images/clap.svg";
import { ReactComponent as ClappedIcon } from "../../../images/clapped.svg";
import { ReactComponent as ShareIcon } from "../../../images/share.svg";
import { ReactComponent as RepostIcon } from "../../../images/repost.svg";
import { ReactComponent as CommentsIcon } from "../../../images/comments.svg";

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
  line-height: 1.5;
  letter-spacing: normal;
  color: #f2f2f2;
  margin-bottom: 2em;
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
  align-items: center;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
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

const AddComment = styled.span`
  margin-right: 1em;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: right;
  color: #0091ff;
  cursor: pointer;
`;

const ClapsCount = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgba(235, 235, 245, 0.6);
`;

const ReadMore = styled.span`
  border: none;
  background: none;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #0091ff;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 6px;
`;

export default function Post({
  imageSource,
  displayName,
  username,
  followerCount,
  isPro,
  commentsCount,
  excerpt,
  clapsCount = 0
}) {
  const [userClaps, setUserClaps] = React.useState(0);
  const [readMore, setReadMore] = React.useState(false);

  const clapPost = () => setUserClaps(userClaps + 1);
  const toggleReadMore = () => setReadMore(!readMore);

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
      <Content>
        {excerpt && excerpt.length > 180 && !readMore
          ? excerpt.substring(0, 180)
          : excerpt}
        ...
        {excerpt && excerpt.length > 180 ? (
          <ReadMore onClick={toggleReadMore}>
            {readMore ? "Read Less" : "Read More"}
          </ReadMore>
        ) : (
          ""
        )}
      </Content>
      <Footer>
        <ActionButtons>
          <ActionButton>
            <RepostIcon />
          </ActionButton>
          <ActionButton>
            <ShareIcon />
          </ActionButton>
          <ActionButton onClick={clapPost} active={userClaps > 0}>
            {userClaps > 0 ? <ClappedIcon /> : <ClapIcon />}
          </ActionButton>
          {userClaps + clapsCount > 0 && (
            <ClapsCount>{numberWithK(userClaps + clapsCount)}</ClapsCount>
          )}
        </ActionButtons>
        <Comments>
          {commentsCount > 0 ? (
            <CommentsCount>{commentsCount} Comments</CommentsCount>
          ) : (
            <AddComment>Add your comment</AddComment>
          )}
          <CommentsIcon />
        </Comments>
      </Footer>
    </PostItem>
  );
}
