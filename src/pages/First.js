import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
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
          아이디로 가입하기
        </StyledButton>
        <StyledDesc>
          가입하시려면 <StyledDesc color="#1d9bf0">쿠키 사용</StyledDesc>을
          포함해
          <StyledDesc color="#1d9bf0">이용약관</StyledDesc>과
          <StyledDesc color="#1d9bf0">개인정보 처리방침</StyledDesc>에
          <br />
          동의해야 합니다.
        </StyledDesc>
        <StyledSpan2>이미 트위터에 가입하셨나요?</StyledSpan2>
        <StyledButton
          onClick={() => {
            navigate("/login");
          }}
          color="#1d9bf0"
        >
          로그인
        </StyledButton>
      </Container>
      <StyledDiv2>
        <FaTwitter className="twitBird" />
        <img className="firstBg" alt="fisrtBg" src="img/firstBg.png" />
      </StyledDiv2>
    </>
  );
};

export default First;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px;
  align-items: flex-start;
`;

const StyledP = styled.p`
  font-size: 38px;
  font-weight: bold;
  margin-top: 50px;
`;

const StyledSpan = styled.span`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  position: relative;
  padding: 20px 0 0 7px;
  width: 85%;
`;
const StyledText = styled.span`
  position: absolute;
  top: 45%;
  left: 45%;
  width: 14%;
  height: 20px;
  background-color: white;
  text-align: center;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.border || "rgb(214, 218, 227)"};
  padding: 0px;
  margin-top: 15px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 90%;
  height: 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor || "white"};
  z-index: 3;
`;

const StyledDesc = styled.span`
  font-size: 10px;
  margin-top: 5px;
  color: ${(props) => props.color};
`;
const StyledSpan2 = styled.span`
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
`;
const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .firstBg {
    width: 100vw;
    height: auto;
    min-height: 300px;
    position: relative;
    z-index: 1;
  }
  .twitBird {
    color: white;
    position: absolute;
    z-index: 2;
    width: 60%;
    height: 50%;
    max-height: 380px;
    
    display: inline-block;
  }
`;
