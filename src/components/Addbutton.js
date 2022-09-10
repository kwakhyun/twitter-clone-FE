import React from "react";
import styled from "styled-components";
import { RiQuillPenFill } from "react-icons/ri";
const AddButton = () => {
  return (
    <StyledButtonContainer>
      <StlyedRelative>
        <StyledP>+</StyledP>
        <StyledIcon>
          <RiQuillPenFill size="2rem" color="white" />
        </StyledIcon>
      </StlyedRelative>
    </StyledButtonContainer>
  );
};

export default AddButton;
const StyledButtonContainer = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 100px;
  right: 20px;
  box-shadow: 10px;
  border-radius: 99999px;
  background-color: rgb(051, 153, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: auto;
  &:hover {
    background-color: rgb(051, 153, 225, 1);
  }
`;
const StlyedRelative = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const StyledP = styled.p`
  position: absolute;
  font-size: 1.5rem;
  font-weight: 350;
  color: white;
  top: -18px;
  left: 12px;
`;
const StyledIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 19px;
`;
