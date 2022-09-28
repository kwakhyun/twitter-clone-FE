import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { Inputplaceholer } from "../elem";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, onChange] = useInput();
  const [idExist, setIdExist] = useState(true);
  const [showBox, setShowBox] = useState(false);

  const idCheck = async (data) => {
    const response = await axios.post(
      "http://15.164.229.25/api/member/userid",
      {
        userId: data,
      }
    );
    return response;
  };

  useEffect(() => {
    let timer = setTimeout(() => setShowBox(false), 3000);
    return () => clearTimeout(timer);
  }, [showBox]);

  const { mutate } = useMutation(idCheck, {
    onSuccess: (response) => {
      if (response.data.success) {
        navigate("/loginpw", { state: inputs.userId });
      } else {
        setIdExist(false);
        setShowBox(true);
      }
    },
    onError: (error) => {
      console.log(error);
      console.log("네트워크 오류");
    },
  });

  return (
    <StyledWrap>
      <StyledTopContainer>
        <BsX
          onClick={() => {
            navigate("/first");
          }}
          size="30px"
        />
        <FaTwitter className="bird" size="28px" color="#1d9bf0" />
      </StyledTopContainer>

      <StyledContainerBox>
        <StyledTitleDiv>트위터에 로그인하기</StyledTitleDiv>
        <StyledButton>
          <a href="http://ec2-15-164-229-25.ap-northeast-2.compute.amazonaws.com/google/login">
            <div className="icon-box">
              <div className="google-icon">
                <FcGoogle size="1.2rem" />
              </div>
              <span>Google로 로그인하기</span>
            </div>
          </a>
        </StyledButton>
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
          marginTop="25px"
          bgcolor="black"
          color="white"
          onClick={() => {
            mutate(inputs.userId);
          }}
        >
          다음
        </StyledButton>
        <StyledButton marginBottom="50px">비밀번호를 잊으셨나요?</StyledButton>
        <span className="desc">
          계정이 없으신가요?
          <StyledSpan onClick={() => navigate("/signup")}> 가입하기</StyledSpan>
        </span>
      </StyledContainerBox>
      {idExist ? null : (
        <StyledDiv showBox={showBox}>
          죄송합니다. 해당 계정을 찾을 수 없습니다.
        </StyledDiv>
      )}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const StyledContainerBox = styled.div`
  padding: 202px 55px;
  overflow: hidden;
  .desc {
    font-size: 14px;
  }
`;

const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin: 10px 0 0 3%;
  .bird {
    margin-left: 37%;
  }
`;

const StyledTitleDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 0 0 25px 0;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.color || "rgb(214, 218, 227)"};
  padding: 0px;
  margin-bottom: ${(props) => props.marginBottom || "25px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor || "white"};
  a {
    text-decoration: none;
    color: inherit;
  }
  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    .google-icon {
      margin: 5px 5px 0 0;
    }
  }
`;

const StyledText = styled.span`
  position: absolute;
  top: -400%;
  left: 40%;
  width: 20%;
  height: 20px;
  background-color: white;
  text-align: center;
`;

const StyledSpan = styled.span`
  color: ${(props) => "#1d9bf0" || props.color};
`;
const StyledLineDiv = styled.div`
  position: relative;
  width: 100%;
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
  display: ${({ showBox }) => (showBox ? "block" : "none")};
`;

export default Login;
