import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiQuillPenFill } from "react-icons/ri";

const AddButton = () => {
  const navigate = useNavigate();

  return (
    <StyledButtonContainer onClick={() => navigate("/addtweet")}>
      <StlyedRelative>
        <StyledP>+</StyledP>
        <StyledIcon>
          <RiQuillPenFill size="2rem" color="white" />
        </StyledIcon>
      </StlyedRelative>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 75px;
  right: 20px;
  box-shadow: 10px;
  border-radius: 50%;
  background-color: rgb(051, 153, 255, 1);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

export default AddButton;
