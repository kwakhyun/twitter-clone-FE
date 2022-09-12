import React from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { Inputplaceholer } from "../elem";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const Signup2 = () => {
  const name = useRef(null);
  const id = useRef(null);
  const password = useRef(null);
  const date = useRef(null);
  const [haveName, setHaveName] = useState(true);
  const [countName, setCountName] = useState(0);

  const signup = async (data) => {
    await axios.post("http://13.125.250.180/api/member/signup", {
      userId: data.userId,
      nickname: data.nickname,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    });
  };

  const { mutate } = useMutation(signup, {
    onSuccess: () => {
      alert("가입을 환영합니다!");
    },
    onError: () => {
      alert("가입에 실패했습니다.");
    },
  });

  useEffect(() => {
    if (name.current.value) {
      setCountName(name.current.value.length);
    }
  }, []);

  const nameFocus = () => {
    name.current.focus();
    document.querySelector(".name-count").style.display = "block";
  };

  const onChangeName = () => {
    if (name.current.value) {
      document.querySelector(".blank-message").style.display = "none";
      setHaveName(true);
    } else {
      document.querySelector(".blank-message").style.display = "block";
      setHaveName(false);
    }
    setCountName(name.current.value.length);
  };

  const onBlurName = () => {
    if (name.current.value) {
      document.querySelector(".name-count").style.display = "none";
    }
  };

  return (
    <>
      <StyledTopContainer>
        <BsX size="30px" />
        <StyledStepNumber>회원가입</StyledStepNumber>
      </StyledTopContainer>
      <StyledContentContainer>
        <StyledTitleSpan>계정을 생성하세요</StyledTitleSpan>
        <StyledContainer>
          <StyledNameDiv onClick={nameFocus} haveValue={haveName}>
            <StyledNameSpan className="name-span" haveValue={haveName}>
              이름
            </StyledNameSpan>
            <span className="name-count">{countName} / 50</span>
            <input
              type="text"
              ref={name}
              onChange={onChangeName}
              onBlur={onBlurName}
              maxLength={50}
              defaultValue=""
            />
          </StyledNameDiv>
          <span className="blank-message">이름을 입력해 주세요.</span>
        </StyledContainer>
        <input type="text" ref={id} />
        <input type="text" ref={password} />

        <StyledSpan>생년월일</StyledSpan>
        <StyledDesc>
          이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
          주제에 상관없이 나의 연령을 확인하세요.
        </StyledDesc>
        <StyledInputContainer>
          <StyledInputSpan>생년월일</StyledInputSpan>
          <StyledInput type="date" ref={date}></StyledInput>
        </StyledInputContainer>
      </StyledContentContainer>
      <StyledNextButton
        onClick={() => {
          mutate({
            nickname: name.current.value,
            userId: id.current.value,
            password: password.current.value,
            dateOfBirth: date.current.value,
          });
        }}
        bgcolor="#0f1419"
        color="white"
      >
        가입하기
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

const StyledContainer = styled.div`
  width: 100%;
  .blank-message {
    display: none;
    color: #f42a36;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
  }
`;

const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90vw;
  height: 55px;
  border: ${({ haveValue }) =>
    haveValue ? "2px solid #e8e8e8" : "2px solid #f42a36"};
  &:focus-within {
    border: ${({ haveValue }) =>
      haveValue ? "2px solid #1da1f2" : "2px solid #f42a36"};
    .name-span {
      color: ${({ haveValue }) => (haveValue ? "#1da1f2" : "#f42a36")};
      font-size: 0.8rem;
      margin-top: 8px;
      margin-left: 8px;
      transition: 0.2s;
    }
  }
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: sans-serif;
    margin: 27px 0 0 5px;
  }
  .name-count {
    display: none;
    position: absolute;
    color: gray;
    font-weight: 500;
    font-size: 0.8rem;
    margin-top: 8px;
    right: 8%;
  }
`;

const StyledNameSpan = styled.span`
  color: gray;
  position: absolute;
  margin-top: ${({ haveValue }) => (haveValue ? "8px" : "16px")};
  margin-left: 8px;
  font-size: ${({ haveValue }) => (haveValue ? "0.8rem" : "1rem")};
  transition: 0.2s;
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

export default Signup2;
