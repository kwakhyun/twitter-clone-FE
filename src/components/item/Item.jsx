import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { postedTime } from "../../hooks/postedTime";
import { BsBoxArrowUp } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useMutation, useQueryClient } from "react-query";
import { likeAPI, tweetAPI, retweetAPI } from "../../shared/api";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getUserId } from "../../shared/storage";
import { useEffect } from "react";
import Modal from "../modal/Modal";

const Item = ({ tweet }) => {
  const navigate = useNavigate();
  const myUserId = getUserId();
  const [like, setLike] = useState(false);
  const [retweet, setRetweet] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  let time = postedTime(tweet.createdAt);

  useEffect(() => {
    setLike(tweet.like);
    setRetweet(tweet.retweet);
  }, [tweet.like, tweet.retweet]);

  const queryClient = useQueryClient();

  const deleteTweet = useMutation(tweetAPI.deleteTwit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTweetPage");
      queryClient.invalidateQueries("getMyTweets");
      queryClient.invalidateQueries("getLikeTweets");
    },
  });

  const retweetMutate = useMutation(retweetAPI.getReTwit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTweetPage");
      queryClient.invalidateQueries("getMyTweets");
      queryClient.invalidateQueries("getLikeTweets");
    },
  });

  const likeMutate = useMutation(likeAPI.toggleLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTweetPage");
      queryClient.invalidateQueries("getMyTweets");
      queryClient.invalidateQueries("getLikeTweets");
    },
  });

  const goProfile = () => {
    if (myUserId === tweet.userId) {
      navigate(`/profile`);
    } else {
      navigate(`/profile/${tweet.userId}`);
    }
  };

  return (
    <StyledItemContainer>
      <div className="inner">
        <StyledDirectionBox>
          <StyledColuemLeft>
            <StlyedUserImage
              src={tweet.userProfileImage}
              onClick={() => goProfile()}
            />
          </StyledColuemLeft>
          <StyledDirectionBox direct="column">
            <StyledUserInfoBOx>
              <StyledDiv>
                <div className="text">
                  <StyledText size="0.8rem" weight="bold">
                    {tweet.nickname}
                  </StyledText>
                  <StyledText size="0.8rem" color="gray">
                    @{tweet.userId}
                  </StyledText>
                  <StyledText size="0.8rem" color="gray">
                    {" "}
                    ?? {time}
                  </StyledText>
                </div>
              </StyledDiv>
              <StyledText size="1.3rem">
                {myUserId === tweet.userId ? (
                  <RiDeleteBin6Line
                    onClick={() => {
                      setDeleteModal(true);
                    }}
                  />
                ) : (
                  ""
                )}
              </StyledText>
            </StyledUserInfoBOx>

            <div
              className="content"
              onClick={() => navigate(`/detail/${tweet.id}`)}
            >
              <StyledText>{tweet.content}</StyledText>
              <StyledTwiteImage src={tweet.fileUrl} />
            </div>

            <StyledUserInfoBOx>
              <StyledDiv color="skyblue">
                <StyledIconBox backcolor="skyblue">
                  <BiMessageRounded
                    size="1.3rem"
                    onClick={() => navigate(`/detail/${tweet.id}`)}
                  />
                </StyledIconBox>
                <StyledText size="0.7rem">{tweet.commentCnt}</StyledText>
              </StyledDiv>
              <StyledDiv color="lightgreen">
                <StyledIconBox
                  backcolor="lightgreen"
                  onClick={() => {
                    setRetweet(!retweet);
                    retweetMutate.mutate(tweet.id);
                  }}
                >
                  {retweet ? (
                    <AiOutlineRetweet size="1.3rem" color="#00ba7c" />
                  ) : (
                    <AiOutlineRetweet size="1.3rem" />
                  )}
                </StyledIconBox>
                <StyledText size="0.7rem">{tweet?.retwitCnt}</StyledText>
              </StyledDiv>
              <StyledDiv color="lightpink">
                <StyledIconBox
                  backcolor="lightpink"
                  onClick={() => {
                    setLike(!like);
                    likeMutate.mutate(tweet.id);
                  }}
                >
                  {like ? (
                    <IoHeart color="red" size="1.3rem" />
                  ) : (
                    <IoHeartOutline color="red" size="1.3rem" />
                  )}
                </StyledIconBox>
                <StyledText size="0.7rem">{tweet?.likeCnt}</StyledText>
              </StyledDiv>
              <StyledDiv>
                <StyledIconBox backcolor="skyblue">
                  <BsBoxArrowUp size="1.3rem" />
                </StyledIconBox>
              </StyledDiv>
            </StyledUserInfoBOx>
          </StyledDirectionBox>
        </StyledDirectionBox>
      </div>
      {deleteModal && (
        <Modal closeModal={() => setDeleteModal(!deleteModal)}>
          <ModalStyled>
            <span>Delete Tweet?</span>
            <p>
              This can???t be undone and it will be removed from your profile, the
              timeline of any accounts that follow you, and from Twitter search
              results.
            </p>
            <button
              onClick={() => {
                deleteTweet.mutate(tweet?.id);
                setDeleteModal(!deleteModal);
              }}
            >
              Delete
            </button>
          </ModalStyled>
        </Modal>
      )}
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
  margin: auto;
  min-height: 80px;
  position: relative;
  &:hover {
    background-color: rgb(230, 230, 230, 0.3);
  }
  .content {
    margin-left: 10px;
  }
  .inner {
    width: 90%;
    margin: auto;
    min-height: 80px;
    position: relative;
  }
`;

const StyledDirectionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direct};
`;

const StyledColuemLeft = styled.div`
  width: 13%;
`;

const StyledUserInfoBOx = styled.div`
  width: 95%;
  height: 10px;
  display: flex;
  margin: 15px auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    color: ${(props) => props.color};
    opacity: 1;
  }
  .text {
    margin-left: 3px;
  }
`;

const StyledText = styled.span`
  box-sizing: border-box;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

const StyledTwiteImage = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 15px;
  margin-top: 15px;
`;

const StlyedUserImage = styled.img`
  border-radius: 9999px;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 10px;
  left: -5px;
`;

const StyledIconBox = styled.span`
  background-color: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.backcolor};
    border-radius: 9999px;
    color: black;
    opacity: 0.7;
  }
`;

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

export default Item;
