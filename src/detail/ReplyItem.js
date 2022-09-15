import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { tweetAPI, likeAPI } from "../shared/api";
import { useMutation, useQueryClient } from "react-query";
import { getUserId } from "../shared/storage";
import { Modal } from "../components";
const ReplyItem = ({ reply }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [like, setLike] = useState(false);
  const myUserId = getUserId();
  const [deleteModal, setDeleteModal] = useState(false);
  const likeMuation = useMutation(likeAPI.toggleLike);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(tweetAPI.deleteTwit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getDetail", params.id]);
    },
  });

  useEffect(() => {
    setLike(reply.like);
  }, []);

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
                setDeleteModal(true);
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
        <p className="text" onClick={() => navigate(`/detail/${reply.id}`)}>
          {reply?.content}
        </p>
        {reply?.fileUrl ? (
          <img className="fileURL" src={reply?.fileUrl} alt="img" />
        ) : null}

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
            <StyledIcon
              color="lightpink"
              onClick={() => {
                setLike(!like);
                likeMuation.mutate(reply.id);
              }}
            >
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
      {deleteModal && (
        <Modal closeModal={() => setDeleteModal(!deleteModal)}>
          <ModalStyled>
            <span>Delete Tweet?</span>
            <p>
              This can’t be undone and it will be removed from your profile, the
              timeline of any accounts that follow you, and from Twitter search
              results.
            </p>
            <button
              onClick={() => {
                mutate(reply?.id);
                setDeleteModal(!deleteModal);
              }}
            >
              Delete
            </button>
          </ModalStyled>
        </Modal>
      )}
    </StyledReply>
  );
};

const ModalStyled = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
  p {
    font-size: 0.9rem;
    margin-top: 4px;
    margin-bottom: 20px;
  }
  button {
    border: 1px solid rgb(220, 220, 220);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 12%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: rgb(230, 0, 0);
    font-size: 1rem;
    font-weight: 600;
    color: white;
    transition: 0.3s;
    &:hover {
      background-color: rgb(210, 0, 0);
      cursor: pointer;
    }
  }
`;

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
  .fileURL {
    width: 95%;
    margin: 10px 0;
    border: none;
    border-radius: 20px;
  }

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
