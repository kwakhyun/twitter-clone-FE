import React, { useState } from "react";
import styled from "styled-components";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { tweetAPI } from "../shared/api";
import { useMutation, useQueryClient } from "react-query";
import { getUserId } from "../shared/storage";
const ReplyItem = ({ reply }) => {
  const [like, setLike] = useState(false);
  const myUserId = getUserId();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(tweetAPI.deleteTwit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  return (
    <StyledReply>
      <StyledProfileImg src={reply?.userProfileImage} alt="img" />

      <StyledReplyContent>
        <div className="user-info">
          <span>
            <span className="name">{reply?.nickname}</span>
            <span className="id-1">@{reply?.userId}</span>
          </span>
          {myUserId === reply.userId ? (
            <RiDeleteBin6Line
              className="delete"
              onClick={() => {
                if (window.confirm("Delete Tweet?")) {
                  mutate(reply?.id);
                }
              }}
            />
          ) : (
            ""
          )}
        </div>
        <span className="id-2">
          Replying to
          <span> @{reply?.userId}</span>
        </span>
        <p className="text">{reply?.content}</p>
        <StyledIconDiv>
          <div>
            <StyledIcon color="skyblue">
              <BiMessageRounded size="1.5rem" />
            </StyledIcon>
          </div>
          <div>
            <StyledIcon color="lightgreen">
              <AiOutlineRetweet size="1.5rem" />
            </StyledIcon>
          </div>
          <div>
            <StyledIcon color="lightpink" onClick={() => setLike(!like)}>
              {like ? (
                <IoHeartOutline size="1.5rem" />
              ) : (
                <IoHeart color="red" size="1.5rem" />
              )}
            </StyledIcon>
          </div>
          <div>
            <StyledIcon color="skyblue">
              <BsBoxArrowUp size="1.5rem" />
            </StyledIcon>
          </div>
        </StyledIconDiv>
      </StyledReplyContent>
    </StyledReply>
  );
};

const StyledReply = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
  cursor: pointer;
`;

const StyledProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px 15px;
`;

const StyledReplyContent = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  .user-info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .name {
      font-weight: bold;
      margin-right: 5px;
    }
    .id-1 {
      color: gray;
    }
    .delete {
      margin-right: 5%;
    }
  }
  .id-2 {
    color: gray;
    span {
      font-weight: 500;
      color: #1da1f2;
    }
  }
  .text {
    margin: 0;
  }
`;

const StyledIconDiv = styled.div`
  width: 95%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled.span`
  color: gray;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ color }) => color};
    border-radius: 80px;
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export default ReplyItem;
