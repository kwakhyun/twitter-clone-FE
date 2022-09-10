import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { Inputplaceholer } from "../elem";
import useInput from "../hooks/useInput";
const Login = () => {
  const InputRef = useRef(null);

  const [inputs, onChange] = useInput();
  console.log(inputs);
  return (
    <>
      <FaTwitter size="35px" color="#1d9bf0" />
      <h1>트위터에 로그인하기</h1>
      <StyledButton>Google로 로그인하기</StyledButton>
      <StyledDiv>
        <hr />
        <TextStyled>또는</TextStyled>
      </StyledDiv>
      <Inputplaceholer
        text="아이디를 입력하세요"
        onChange={onChange}
        ref={InputRef}
        name="userId"
        width="400px"
        height="200px"
      />
      <StyledButton bgcolor="black" color="white">
        다음
      </StyledButton>
      <StyledButton>비밀번호를 잊으셨나요?</StyledButton>
      <Spanbox>
        계정이 없으신가요?
        <Span>가입하기</Span>
      </Spanbox>
    </>
  );
};

const StyledButton = styled.button`
  border: 1px solid ${props => "gray" || props.color};
  padding: 0px 15px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  height: 40px;
  color: ${props => props.color};
  background-color: ${props => props.bgcolor || "white"};
  margin: 8px;
`;

const Span = styled.span`
  margin-left: 5px;
  color: #1d9bf0;
`;
const Spanbox = styled.span`
  margin-top: 50px;
`;
const StyledDiv = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
`;
const TextStyled = styled.text`
  position: absolute;
  top: -2px;
  left: 127px;
  width: 12%;
  height: 20px;
  background-color: white;
  text-align: center;
`;
export default Login;
