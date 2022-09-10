import React from "react";
import styled from "styled-components";

import { BiLeftArrowAlt } from "react-icons/bi";
const Addtweet = ({ tweet }) => {
  return (
    <>
      <StlyedHead>
        <StlyedHeaderBox>
          <StyledHeader>
            <BiLeftArrowAlt size="2rem" />
          </StyledHeader>
          <StyledHeader>
            <StyledButton>Tweet</StyledButton>
          </StyledHeader>
        </StlyedHeaderBox>
      </StlyedHead>
      <StlyedGridBox>
        <StlyedUserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWY2WGeTZOwNzA9PZLbaKPARcnkcxaMylmwRBg3juIQ&s" />
        <StlyedContentHead>asd</StlyedContentHead>
        <StlyedContentBody>aaa</StlyedContentBody>
        <StlyedContentImage src="https://i.ytimg.com/vi/e5FVYIvBRH8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMfah9TUYjJYLzbvLIwxMoS2cRaA" />
      </StlyedGridBox>
    </>
  );
};

export default Addtweet;

const StlyedHead = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 50px;
  z-index: 2;
`;
const StlyedHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.7);
  width: 100%;
  height: 50px;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  margin: 5px 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const StyledButton = styled.button`
  border: none;
  width: 70px;
  height: 30px;
  color: white;
  font-weight: 750;
  border-radius: 30%/60%;
  background-color: rgb(051, 153, 255, 0.9);
  transition: 0.3s;
  &:hover {
    background-color: rgb(051, 153, 215, 0.9);
  }
`;

const StlyedGridBox = styled.div`
  border: 1px solid black;
  display: grid;
  max-width: 767px;
  width: 100%;

  height: 500px;
  grid-template-rows: 10% 10% 20% 20% 20% 20%;
  grid-template-columns: 10% 10% 20% 20% 20% 20%;
`;
const StlyedUserImage = styled.img`
  grid-column-start: 2;
  grid-row-start: 2;
  border: 1px solid black;
  border-radius: 9999px;
  width: 45px;
  height: 45px;
`;

const StlyedContentHead = styled.div`
  grid-column: 3/6;
  grid-row-start: 2;
  border: 1px solid black;
`;
const StlyedContentBody = styled.div`
  grid-column: 3/6;
  grid-row: 3/4;
  border: 1px solid black;
`;

const StlyedContentImage = styled.img`
  grid-column: 3/6;
  grid-row: 4/5;
  border: 1px solid black;
`;
