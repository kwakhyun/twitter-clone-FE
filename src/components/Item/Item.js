import React from "react";
import styled from "styled-components";

import { BsBoxArrowUp } from "react-icons/bs";
import { TiArrowRepeat } from "react-icons/ti";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const Item = ({ children }) => {
  return (
    <StyledItemContainer>
      <StlyedItemInnerContainer>
        <StyledDirectionBox>
          <StyledColuemLeft>
            <StlyedUserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWY2WGeTZOwNzA9PZLbaKPARcnkcxaMylmwRBg3juIQ&s" />
          </StyledColuemLeft>
          <StyledDirectionBox direct="column">
            <StyledUserInfoBOx>
              <Styleddiv>
                <StyledText fs="0.8rem" fw="bold">
                  TAEGWON
                </StyledText>
                <StyledText fs="0.5rem">@999</StyledText>
                <StyledText fs="0.5rem">_3시간전</StyledText>
              </Styleddiv>
              <StyledText fs="0.3rem">●●●</StyledText>
            </StyledUserInfoBOx>
            <StyledText>여기는 내용이 들어갈꺼에요</StyledText>
            <StyledTwiteImage src="https://i.ytimg.com/an_webp/IqwYYPxya6U/mqdefault_6s.webp?du=3000&sqp=CNW975gG&rs=AOn4CLBKzakxYKqPZGh-h_o0q1AZYjPkpw" />
            <StyledUserInfoBOx>
              <Styleddiv color="skyblue">
                <StyledIconBox backcolor="skyblue">
                  <BiMessageRounded size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">525252</StyledText>
              </Styleddiv>
              <Styleddiv color="lightgreen">
                <StyledIconBox backcolor="lightgreen">
                  <TiArrowRepeat size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">525252</StyledText>
              </Styleddiv>
              <Styleddiv color="lightpink">
                <StyledIconBox backcolor="lightpink">
                  <FaHeart color="red" size="1.3rem" />
                </StyledIconBox>
                <StyledText fs="0.7rem">123123</StyledText>
              </Styleddiv>
              <Styleddiv>
                <StyledIconBox backcolor="skyblue">
                  <BsBoxArrowUp size="1.3rem" />
                </StyledIconBox>
              </Styleddiv>
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

const Styleddiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    color: ${props => props.color};
    opacity: 1;
  }
`;

const StyledText = styled.text`
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

const StyledIconBox = styled.text`
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
