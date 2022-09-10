import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
  const [IsFocus, setIsFocus] = useState(false);
  const InputRef = useRef(null);
  const Ref = useRef(null);

  const handleFocus = () => {
    if (IsFocus) {
      document.querySelector(".text").innerHTML =
        "휴대폰 번호, 이메일 주소 또는 사용자 아이디";
    }
  };

  return (
    <>
      <FaTwitter size="35px" color="#1d9bf0" />
      <h1>트위터에 로그인하기</h1>
      <StyledButton>Google로 로그인하기</StyledButton>
      <StyledDiv>
        <hr />
        <TextStyled>또는</TextStyled>
      </StyledDiv>
      <StyledDiv>
        {IsFocus && InputRef.current.value !== undefined ? (
          <div>
            <text>휴대폰 번호, 이메일 주소 또는 사용자 아이디</text>
            <IdInput
              autoFocus
              onBlur={() => {
                setIsFocus(false);
              }}
              ref={Ref}
            ></IdInput>
          </div>
        ) : (
          <IdInput
            ref={InputRef}
            onFocus={() => {
              setIsFocus(true);
              Ref.current.focus();
            }}
            placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
            type="text"
          ></IdInput>
        )}
      </StyledDiv>

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

const IdInput = styled.input`
  margin: 15px 0px 10px 0px;
  padding: 14px 16px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  width: 230px;
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
