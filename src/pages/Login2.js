import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const Login2 = () => {
  return (
    <>
      <FaTwitter color="#1d9bf0" size="35px" />
      <StyledTitleSpan>트위터에 로그인하기</StyledTitleSpan>
      <StyledButton>Google로 로그인하기</StyledButton>
      <StyledLineDiv>
        <hr />
        <StyledText>또는</StyledText>
      </StyledLineDiv>
      <StyledInputContainer>
        <StyledInputSpan>아이디를 입력해주세요.</StyledInputSpan>
        <StyledInput type="text"></StyledInput>
      </StyledInputContainer>
      <StyledButton bgcolor="black" color="white">
        다음
      </StyledButton>
      <StyledButton>비밀번호를 잊으셨나요?</StyledButton>
      <span>
        계정이 없으신가요?
        <StyledSpan>가입하기</StyledSpan>
      </span>
    </>
  );
};

const StyledTitleSpan = styled.span`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.color || "rgb(214, 218, 227)"};
  padding: 0px;
  margin: 0px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  height: 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor || "white"};
  margin: 8px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  margin: 15px 0;
  padding: 0px 5px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  width: 65%;
  z-index: 1;
  &:hover {
    outline: 2px solid #1d9bf0;
  }
`;
const StyledInputSpan = styled.span`
  color: gray;
  font-size: 13px;
  z-index: 3;
  &:hover {
    color: #1d9bf0;
  }
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
  color: ${(props) => "#1d9bf0" || props.color};
`;
const StyledLineDiv = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
`;
const StyledText = styled.text`
  position: absolute;
  top: -2px;
  left: 127px;
  width: 15%;
  height: 20px;
  background-color: white;
  text-align: center;
`;
export default Login2;
