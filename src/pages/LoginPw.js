import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Inputplaceholer } from "../elem";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useRef } from "react";
import useInput from "../hooks/useInput";
import { useEffect } from "react";

const LoginPw = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassWord, setShowPassWord] = useState(false);
  const [inputs, onChange] = useInput();
  const [passwordExist, setPasswordExist] = useState(true);

  const onLogin = async (data) => {
    const response = await axios.post("http://15.164.229.25/api/member/login", {
      userId: data.userId,
      password: inputs.password,
    });
    return response;
  };

  const { mutate } = useMutation(onLogin, {
    onSuccess: ({ data, headers }) => {
      if (data.success) {
        alert("로그인 성공!");
        localStorage.setItem("access_token", headers["authorization"]);
        localStorage.setItem("refresh_token", headers["refresh-token"]);
        navigate("/");
      } else {
        setPasswordExist(false);
      }
    },
    onError: () => {
      alert("로그인에 실패했습니다.");
    },
  });

  useEffect(() => {
    console.log("dd");
  }, [showPassWord]);

  return (
    <>
      <StyledTopContainer>
        <StyledxContainer>
          <BsX
            onClick={() => {
              navigate("/first");
            }}
            size="30px"
          />
        </StyledxContainer>
        <FaTwitter size="30px" color="#1d9bf0" />
      </StyledTopContainer>

      <StyledContainerBox>
        <StyledTitleDiv>비밀번호를 입력하세요.</StyledTitleDiv>
        <Inputplaceholer
          text="사용자아이디"
          defaultValue={state}
          name="userId"
          disabled="true"
          type="text"
          onChange={onChange}
        />
        <div style={{ position: "relative" }}>
          <Inputplaceholer
            text="비밀번호"
            name="password"
            onChange={onChange}
            type={showPassWord ? "text" : "password"}
          />
          <StyledEyeDiv
            onClick={() => {
              setShowPassWord(!showPassWord);
            }}
          >
            {showPassWord ? <FaRegEyeSlash /> : <FaRegEye />}
          </StyledEyeDiv>
        </div>

        <StyledSpan>비밀번호 찾기</StyledSpan>
        <StyledButton
          onClick={() =>
            mutate({
              userId: state,
              password: inputs?.password,
            })
          }
        >
          로그인하기
        </StyledButton>
        <span className="desc">
          계정이 없으신가요?
          <StyledSpan onClick={() => navigate("/signup")}>가입하기</StyledSpan>
        </span>
      </StyledContainerBox>

      {passwordExist ? null : <StyledDiv>잘못된 비밀번호입니다.</StyledDiv>}
    </>
  );
};
export default LoginPw;

const StyledContainerBox = styled.div`
  margin: 0px;
  padding: 30px;
  .desc {
    font-size: 14px;
  }
  .inputStyle {
    margin: 0px;
  }
`;

const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin: 10px 0 0 20px;
  .bird {
    margin-left: 35%;
  }
`;
const StyledxContainer = styled.div`
  margin-right: 38%;
`;
const StyledTitleDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 0 0 15px 0;
`;
const StyledButton = styled.button`
  border: none;
  padding: 0px;
  margin-top: 100%;
  margin-bottom: 30px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  color: white;
  background-color: black;
`;
const StyledSpan = styled.span`
  color: #1d9bf0;
  font-size: 14px;
`;
const StyledDiv = styled.div`
  position: fixed;
  background-color: #1d9bf0;
  bottom: 80px;
  padding: 10px 0px 10px 20px;
  max-height: 45px;
  width: 100%;
  color: white;
`;

const StyledEyeDiv = styled.div`
  position: absolute;
  right: 5%;
  bottom: 20%;
`;
