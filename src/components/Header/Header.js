import React from "react";
import styled from "styled-components";

import { FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <Wrap>
      <StlyedHeaderBox>
        <StyledHeader>
          <StlyedUserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWY2WGeTZOwNzA9PZLbaKPARcnkcxaMylmwRBg3juIQ&s" />
          <StyledText>Home</StyledText>
        </StyledHeader>
        <StyledHeader>
          <FaTwitter size="25px" color="blue" />
        </StyledHeader>
      </StlyedHeaderBox>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 50px;
`;
const StlyedHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.5);
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

const StyledText = styled.text``;

const StlyedUserImage = styled.img`
  border-radius: 9999px;
  width: 35px;
  height: 35px;
`;
