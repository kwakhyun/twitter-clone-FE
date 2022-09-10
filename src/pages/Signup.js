import React from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";

const Signup = () => {
  return (
    <>
      <StyledTopContainer>
        <BsX size="30px" />
        <StyledStepNumber>5단계 중 1단계</StyledStepNumber>
      </StyledTopContainer>
      <StyledContentContainer>
        <StyledTitleSpan>계정을 생성하세요</StyledTitleSpan>

        <StyledInputContainer>
          <StyledInputSpan>이름</StyledInputSpan>
          <StyledInput type="text"></StyledInput>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputSpan>아이디</StyledInputSpan>
          <StyledInput type="text"></StyledInput>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputSpan>비밀번호</StyledInputSpan>
          <StyledInput type="text"></StyledInput>
        </StyledInputContainer>
        <StyledSpan>생년월일</StyledSpan>
        <StyledDesc>
          이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
          주제에 상관없이 나의 연령을 확인하세요.
        </StyledDesc>
        <StyledInputContainer>
          <StyledInputSpan>생년월일</StyledInputSpan>
          <StyledInput type="text"></StyledInput>
        </StyledInputContainer>
      </StyledContentContainer>
      <StyledNextButton bgcolor="#0f1419" color="white">
        다음
      </StyledNextButton>
    </>
  );
};

const StyledTopContainer = styled.div`
  display: flex;
  margin: 10px 0 0 15px;
  align-items: center;
  justify-content: left;
  width: 100%;
`;
const StyledStepNumber = styled.span`
  font-weight: bold;
  color: #0f1419;
  margin-left: 40px;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
`;

const StyledTitleSpan = styled.span`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledNextButton = styled.button`
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  width: 85%;
  height: 50px;
  color: white;
  background-color: gray;
  opacity: 0.9;
  margin-top: 150px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  margin: 15px 0;
  padding: 0px 5px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  width: 100%;
  z-index: 1;
  &:hover {
    outline: 2px solid #1d9bf0;
  }
`;
const StyledInputSpan = styled.span`
  color: gray;
  font-size: 13px;
  z-index: 3;
`;
const StyledInput = styled.input`
  position: relative;
  margin: 0px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  outline: none;
  z-index: 2;
`;
const StyledSpan = styled.span`
  margin-top: 30px;
  color: black;
  font-size: 14px;
  font-weight: bold;
`;
const StyledDesc = styled.span`
  font-size: 13px;
`;

export default Signup;
