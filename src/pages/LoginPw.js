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

const LoginPw = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPw, SetShowPw] = useState(false);
  const [inputs, onChange] = useInput();

  const onLogin = async data => {
    const response = await axios.post("http://13.125.55.110/api/member/login", {
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
        alert(data.error.message);
      }
    },
    onError: () => {
      alert("로그인에 실패했습니다.");
    },
  });

  return (
    <>
      <StyledTopContainer>
        <StyledxContainer>
          <BsX size="30px" />
        </StyledxContainer>
        <FaTwitter size="30px" color="#1d9bf0" />
      </StyledTopContainer>

      <StyledTitleSpan>비밀번호를 입력하세요.</StyledTitleSpan>
      <Inputplaceholer
        text="사용자아이디"
        defaultValue={state}
        name="userId"
        disabled="true"
        type="text"
        onChange={onChange}
      />
      <Inputplaceholer
        text="비밀번호"
        name="password"
        onChange={onChange}
        type={showPw ? "text" : "password"}
      />
      {/* {showPw ? <FaRegEyeSlash /> : <FaRegEye />} */}

      <StyledSpan margin="200px">비밀번호 찾기</StyledSpan>
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
      <StyledSpan color="black">
        계정이 없으신가요?
        <StyledSpan> 가입하기</StyledSpan>
      </StyledSpan>
    </>
  );
};
export default LoginPw;

const StyledTopContainer = styled.div`
  display: flex;
  margin: 10px 0 0 15px;
  align-items: center;
  width: 100%;
`;
const StyledxContainer = styled.div`
  margin-right: 38%;
`;
const StyledTitleSpan = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 80px 20px 0;
`;
const StyledButton = styled.button`
  border: none;
  padding: 0px;
  margin: 15px;
  margin-top: 100%;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  width: 85%;
  height: 50px;
  color: white;
  background-color: black;
`;
const StyledSpan = styled.span`
  color: ${props => props.color || "#1d9bf0"};
  font-size: 14px;
  margin-right: ${props => props.margin || "90px"}; ;
`;
