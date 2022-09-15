import React from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { Inputplaceholer } from "../elem";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const [haveName, setHaveName] = useState(false);
  const [countName, setCountName] = useState(0);
  const [havePassword, setHavePassword] = useState(false);
  const [inputs, onChange] = useInput();
  const [dateChange, setDateChange] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);
  const [checkName, setCheckName] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  // const [havdId, setHaveId] = useState(true);
  const navigate = useNavigate();

  const signup = async (data) => {
    return await axios.post("http://15.164.229.25/api/member/signup", {
      userId: data.userId,
      nickname: data.nickname,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    });
  };

  const { mutate } = useMutation(signup, {
    onSuccess: (data) => {
      if (data.data.success) {
        alert("가입을 환영합니다!");
        navigate("/login");
      } else {
        alert(data.data.error.message);
      }
    },
    onError: (error) => {
      alert("가입에 실패했습니다");
    },
  });

  useEffect(() => {
    if (nameRef.current.value) {
      setCountName(nameRef.current.value.length);
    }
  }, []);

  const nameFocus = () => {
    nameRef.current.focus();
    document.querySelector(".name-count").style.display = "block";
  };

  const onChangeName = () => {
    if (nameRef.current.value) {
      document.querySelector(".blank-message").style.display = "none";
      setHaveName(true);
      setCheckName(true);
    } else {
      document.querySelector(".blank-message").style.display = "block";
      setHaveName(false);
      setCheckName(false);
    }
    setCountName(nameRef.current.value.length);
  };

  const onChangePassword = () => {
    if (passwordRef.current.value.length >= 8) {
      document.querySelector(".check-message").style.display = "none";
      setHavePassword(true);
      setCheckPassword(true);
    } else {
      document.querySelector(".check-message").style.display = "block";
      setHavePassword(false);
      setCheckPassword(false);
    }
  };

  const onBlurName = () => {
    if (nameRef.current.value) {
      document.querySelector(".name-count").style.display = "none";
    }
  };

  let now_utc = Date.now();
  let timeOff = new Date().getTimezoneOffset() * 60000;
  let today = new Date(now_utc - timeOff).toISOString().split("T")[0];

  return (
    <>
      <StyledTopContainer>
        <BsX
          onClick={() => {
            navigate("/first");
          }}
          size="30px"
        />
        <StyledStepNumber>회원가입</StyledStepNumber>
      </StyledTopContainer>
      <StyledWrap>
        <StyledContentContainer>
          <StyledTitleSpan>계정을 생성하세요</StyledTitleSpan>

          <StyledContainer>
            <StyledNameDiv onClick={nameFocus} haveValue={checkName}>
              <StyledNameSpan className="name-span" haveValue={haveName}>
                이름
              </StyledNameSpan>
              <span className="name-count">{countName} / 50</span>
              <input
                type="text"
                ref={nameRef}
                onChange={onChangeName}
                onBlur={onBlurName}
                maxLength={50}
                defaultValue=""
              />
            </StyledNameDiv>
            <span className="blank-message">이름을 입력해 주세요.</span>
          </StyledContainer>

          <StyledContainer>
            <Inputplaceholer
              onChange={onChange}
              ref={idRef}
              type="text"
              name="userId"
              text="사용자 아이디"
            />
          </StyledContainer>
          <StyledContainer>
            <StyledPasswordDiv haveValue={checkPassword}>
              <StyledPasswordSpan
                className="password-span"
                haveValue={havePassword}
              >
                비밀번호
              </StyledPasswordSpan>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassWord ? "text" : "password"}
                  ref={passwordRef}
                  onChange={onChangePassword}
                  name="password"
                  text="비밀번호"
                  haveValue={havePassword}
                />
                <StyledEyeDiv
                  onClick={() => {
                    setShowPassWord(!showPassWord);
                  }}
                >
                  {showPassWord ? <FaRegEyeSlash /> : <FaRegEye />}
                </StyledEyeDiv>
              </div>
            </StyledPasswordDiv>
            <span className="check-message">8자 이상 입력해주세요</span>
          </StyledContainer>
          <StyledSpan>생년월일</StyledSpan>
          <StyledDesc>
            이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상관없이 나의 연령을 확인하세요.
          </StyledDesc>
          <StyledInputContainer>
            <StyledInputSpan>생년월일</StyledInputSpan>
            <StyledInput
              max={today}
              type="date"
              ref={dateRef}
              onChange={(e) => {
                setDateChange(e.target.value);
              }}
            ></StyledInput>
          </StyledInputContainer>
        </StyledContentContainer>
        <StyledJoinButton
          disabled={
            !(
              nameRef.current?.value &&
              passwordRef.current?.value &&
              idRef.current?.value &&
              dateChange
            )
          }
          isDisabled={
            nameRef.current?.value &&
            passwordRef.current?.value &&
            idRef.current?.value &&
            dateChange
          }
          onClick={() => {
            mutate({
              nickname: nameRef.current.value,
              userId: inputs.userId,
              password: passwordRef.current.value,
              dateOfBirth: dateRef.current.value,
            });
          }}
          bgcolor="#0f1419"
          color="white"
        >
          가입하기
        </StyledJoinButton>
      </StyledWrap>
    </>
  );
};

const StyledWrap = styled.div`
  padding: 0 30px;
  overflow: hidden;
`;

const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 10px 0 30px 20px;
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
    padding-left: 10px;
  }
  .check-message {
    display: none;
    color: #f42a36;
    font-size: 12px;
    font-weight: 500;
    padding-left: 10px;
  }
`;

const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 55px;
  border: ${({ haveValue }) =>
    haveValue ? "1px solid rgb(214,218,227)" : "2px solid #f42a36"};
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
    margin-right: 5px;
    right: 8%;
  }
`;

const StyledPasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 55px;
  border: ${({ haveValue }) =>
    haveValue ? "1px solid rgb(214,218,227)" : "2px solid #f42a36"};
  /* .password-span {
    font-size: 1rem;
    padding-top: 10px;
  } */
  &:focus-within {
    border: ${({ haveValue }) =>
      haveValue ? "2px solid #1da1f2" : "2px solid #f42a36"};

    .password-span {
      color: ${({ haveValue }) => (haveValue ? "#1da1f2" : "#f42a36")};
      padding-top: 0px;
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
    &::placeholder-shown {
      .password-span {
        font-size: 1rem;
        padding-top: 10px;
      }
    }
    &:not(:placeholder-shown) {
      + .password-span {
        padding-top: 0px;
        font-size: 0.8rem;
      }
    }
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
const StyledPasswordSpan = styled.span`
  color: gray;
  position: absolute;
  margin-top: ${({ haveValue }) => (haveValue ? "8px" : "16px")};
  margin-left: 8px;
  font-size: ${({ haveValue }) => (haveValue ? "0.8rem" : "1rem")};
  transition: 0.2s;
  z-index: 5;
`;

const StyledJoinButton = styled.button`
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${({ isDisabled }) => (isDisabled ? "black" : "gray")};
  opacity: 0.9;
  margin-top: 75%;
`;

const StyledInputContainer = styled.div`
  position: relative;
  margin: 15px 0;
  padding: 5px;
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
  width: 100%;
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

const StyledEyeDiv = styled.div`
  position: absolute;
  right: 5%;
  bottom: 20%;
`;

export default Signup;
