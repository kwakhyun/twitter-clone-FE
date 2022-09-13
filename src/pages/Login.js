import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { Inputplaceholer } from "../elem";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, onChange] = useInput();
  const [idExist,setIdExist] = useState(true);

  const idCheck = async (data) => {
    const response = await axios.post(
      "http://13.125.55.110/api/member/userid",
      {
        userId: data,
      }
    );
    return response;
  };

  const { mutate } = useMutation(idCheck, {
    
    onSuccess: (response) => {
      console.log(response.data)
      if (response.data.success) {
        navigate("/loginpw", { state: inputs.userId });
      } else {
        setIdExist(false)
      }
    },
    onError: (error) => {
    },
  });

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
        name="userId"
        type="text"
      />

      <StyledButton
        bgcolor="black"
        color="white"
        onClick={() => {
          mutate(inputs.userId);
        }}
      >
        다음
      </StyledButton>
      <StyledButton>비밀번호를 잊으셨나요?</StyledButton>
      <span className="testclass">
        계정이 없으신가요?
        <StyledSpan onClick={()=>navigate("/signup")}>가입하기</StyledSpan>
      </span>
      {idExist?null:<StyledDiv>죄송합니다. 해당 계정을 찾을 수 없습니다.</StyledDiv>}
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

const StyledText = styled.span`
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

const StyledDiv = styled.div`
  position: fixed;
  background-color: #1d9bf0;
  bottom: 0px;
  padding: 10px 0px 10px 20px;
  max-height: 45px;
  width: 100%;
  color: white;
`

export default Login;
