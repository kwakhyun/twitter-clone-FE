import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { Inputplaceholer } from "../elem";
import useInput from "../hooks/useInput";
import { BsX } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPw = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassWord, setShowPassWord] = useState(false);
  const [inputs, onChange] = useInput();
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [showBox, setShowBox] = useState(false);

  const passwordRef = useRef();
  const onLogin = async (data) => {
    const response = await axios.post("http://15.164.229.25/api/member/login", {
      userId: data.userId,
      password: inputs.password,
    });
    return response;
  };

  useEffect(() => {
    let timer = setTimeout(() => setShowBox(false), 3000);
    return () => clearTimeout(timer);
  }, [showBox]);

  const { mutate } = useMutation(onLogin, {
    onSuccess: ({ data, headers }) => {
      if (data.success) {
        localStorage.setItem("user_id", data.data.userId);
        localStorage.setItem("access_token", headers["authorization"]);
        localStorage.setItem("refresh_token", headers["refresh-token"]);
        navigate("/");
      } else {
        passwordRef.current.value = "";
        setPasswordCheck(false);
        setShowBox(true);
      }
    },
  });

  return (
    <StyledWrap>
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

      <StyledContainer>
        <StyledTitleDiv>비밀번호를 입력하세요.</StyledTitleDiv>
        <Inputplaceholer
          text="사용자 아이디"
          defaultValue={state}
          name="userId"
          disabled={true}
          type="text"
          onChange={onChange}
        />
        <div style={{ position: "relative" }}>
          <Inputplaceholer
            text="비밀번호"
            ref={passwordRef}
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
          disabled={!passwordRef.current?.value}
          isDisable={passwordRef.current?.value}
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
          <StyledSpan font="14px" onClick={() => navigate("/signup")}>
            가입하기
          </StyledSpan>
        </span>
      </StyledContainer>
      {passwordCheck ? null : (
        <StyledDiv showBox={showBox}>잘못된 비밀번호입니다.</StyledDiv>
      )}
    </StyledWrap>
  );
};
export default LoginPw;

const StyledWrap = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  margin: 0px;
  padding: 30px 30px 0 30px;
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
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0 0 3%;
  .bird {
    margin-left: 37%;
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
  margin-top: 55vh;
  margin-bottom: 15px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${({ isDisable }) => (isDisable ? "black" : "gray")};
  opacity: 0.9;
`;
const StyledSpan = styled.span`
  color: #1d9bf0;
  font-size: ${(props) => props.font || "12px"};
`;
const StyledDiv = styled.div`
  position: fixed;
  background-color: #1d9bf0;
  bottom: 0px;
  padding: 10px 0px 10px 20px;
  max-height: 45px;
  width: 100%;
  color: white;
  display: ${({ showBox }) => (showBox ? "block" : "none")};
`;

const StyledEyeDiv = styled.div`
  position: absolute;
  right: 5%;
  bottom: 20%;
`;
