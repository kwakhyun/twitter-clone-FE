import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { Inputplaceholer } from "../elem";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const InputRef = useRef(null);
  const [inputs, onChange] = useInput();

  const navigate = useNavigate();

  const onClickNext = () => {
    navigate("/loginpw", { state: inputs.userId });
  };

  return (
    <>
      <FaTwitter size="35px" color="#1d9bf0" />
      <StyledTitleSpan>트위터에 로그인하기</StyledTitleSpan>
      <StyledButton>Google로 로그인하기</StyledButton>
      <StyledLineDiv>
        <hr />
        <StyledText>또는</StyledText>
      </StyledLineDiv>
      <Inputplaceholer
        text="아이디를 입력해주세요."
        onChange={onChange}
        ref={InputRef}
        name="userId"
        type="text"
      />
      <StyledButton bgcolor="black" color="white" onClick={onClickNext}>
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
  margin: 15px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  height: 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor || "white"};
`;

const StyledText = styled.text`
  position: absolute;
  top: -2px;
  left: 127px;
  width: 12%;
  height: 20px;
  background-color: white;
  text-align: center;
`;

const StyledSpan = styled.span`
  color: ${(props) => "#1d9bf0" || props.color};
`;
const StyledLineDiv = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
`;
export default Login;
