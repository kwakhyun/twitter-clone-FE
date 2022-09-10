import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <FaTwitter color="#1d9bf0" size="40px" />
      <StyledP>지금 일어나고 있는 일</StyledP>
      <StyledSpan>오늘 트위터에 가입하세요.</StyledSpan>
      <StyledButton>Google 계정으로 가입하기</StyledButton>
      <StyledDiv>
        <hr /> <StyledText>또는</StyledText>
      </StyledDiv>

      <StyledButton
        onClick={() => {
          navigate("/signup");
        }}
        bgcolor="#1d9bf0"
        border="#1d9bf0"
        color="white"
      >
        휴대폰 번호나 이메일 주소로 가입하기
      </StyledButton>
      <>
        <StyledDescText>
          가입하시려면 <StyledDesc color="#1d9bf0">쿠키 사용</StyledDesc>을
          포함해
          <StyledDesc color="#1d9bf0"> 이용약관</StyledDesc>과
          <StyledDesc color="#1d9bf0"> 개인정보 처리</StyledDesc>
          <StyledDesc color="#1d9bf0">방침</StyledDesc>에 동의해야 합니다.
        </StyledDescText>

        <StyledSpan size="20px">이미 트위터에 가입하셨나요?</StyledSpan>
        <StyledButton
          color="#1d9bf0"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </StyledButton>
        <FaTwitter color="#1d9bf0" size="80%" />
      </>
    </>
  );
};

export default First;

const StyledP = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0px;
`;

const StyledSpan = styled.span`
  font-size: ${(props) => props.size || "23px"};
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
`;
const StyledText = styled.text`
  position: absolute;
  top: -2px;
  left: 127px;
  width: 15%;
  height: 20px;
  background-color: white;
  text-align: center;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.border || "rgb(214, 218, 227)"};
  padding: 0px 15px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  height: 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor || "white"};
  margin: 8px;
`;

const StyledDesc = styled.span`
  font-size: 11px;
  color: ${(props) => props.color};
`;

const StyledDescText = styled.text`
  text-align: left;
  width: 70%;
  font-size: 11px;
`;
