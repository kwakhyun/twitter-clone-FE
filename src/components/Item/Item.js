import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostedTime } from "../../hooks/PostedTime";
import { BsBoxArrowUp } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Item = ({ tweet }) => {
  const navigate = useNavigate();
  let postedTime = PostedTime(tweet.createdAt);

  return (
    <StyledItemContainer>
      <StlyedItemInnerContainer>
        <StyledDirectionBox>
          <StyledColuemLeft>
            <StlyedUserImage src={tweet.userProfileImage} />
          </StyledColuemLeft>
          <StyledDirectionBox direct="column">
            <StyledUserInfoBOx>
              <StyledDiv>
                <StyledText fs="0.8rem" fw="bold">
                  {tweet.nickname}
                </StyledText>
                <StyledText fs="0.5rem">@999</StyledText>
                <StyledText fs="0.5rem">_{postedTime}</StyledText>
              </StyledDiv>
              <StyledText fs="0.3rem">●●●</StyledText>
            </StyledUserInfoBOx>

            <div onClick={() => navigate(`/detail/${tweet.id}`)}>
              <StyledText>{tweet.content}</StyledText>
              <StyledTwiteImage src={tweet.fileUrl} />
            </div>

            <StyledUserInfoBOx>
              <StyledDiv color="skyblue">
                <StyledIconBox backcolor="skyblue">
                  <BiMessageRounded size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">{tweet.commentCnt}</StyledText>
              </StyledDiv>
              <StyledDiv color="lightgreen">
                <StyledIconBox backcolor="lightgreen">
                  <AiOutlineRetweet size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">525252</StyledText>
              </StyledDiv>
              <StyledDiv color="lightpink">
                <StyledIconBox backcolor="lightpink">
                  <FaHeart color="red" size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">{tweet.likeCnt}</StyledText>
              </StyledDiv>
              <StyledDiv>
                <StyledIconBox backcolor="skyblue">
                  <BsBoxArrowUp size="1.3rem" />
                </StyledIconBox>
              </StyledDiv>
            </StyledUserInfoBOx>
          </StyledDirectionBox>
        </StyledDirectionBox>
      </StlyedItemInnerContainer>
    </StyledItemContainer>
  );
};

export default Item;

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
`;
const StlyedItemInnerContainer = styled.div`
  width: 90%;

  margin: auto;
  min-height: 80px;
  position: relative;
`;
const StyledDirectionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direct};
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
    color: ${props => props.color};
    opacity: 1;
  }
`;

const StyledText = styled.span`
  box-sizing: border-box;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
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
  left: -1px;
`;

const StyledIconBox = styled.span`
  background-color: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => props.backcolor};
    border-radius: 9999px;
    color: black;

    opacity: 0.7;
  }
`;
