import React from "react";
import styled from "styled-components";
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
            <StyledTwiteImage src="https://i.ytimg.com/an_webp/d93xLRlDQko/mqdefault_6s.webp?du=3000&sqp=CODF7JgG&rs=AOn4CLAhtBOYewT4rBTwTRlqyoGBV9fFlw" />
            <StyledUserInfoBOx>
              <Styleddiv>
                <BiMessageRounded size="1.3rem" />
                <StyledText fs="0.7rem">525252</StyledText>
              </Styleddiv>
              <Styleddiv>
                <FaRegHeart size="1.3rem" />
                <p>asd</p>
              </Styleddiv>
              <Styleddiv>
                <FaHeart color="red" size="1.3rem" />
                <StyledText fs="0.7rem">123123</StyledText>
              </Styleddiv>
              <Styleddiv>
                <BiMessageRounded size="1.3rem" />
                <p>asd</p>
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
  width: 100%;
  height: 10px;
  display: flex;
  margin: 10px 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Styleddiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
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
