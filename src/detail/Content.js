import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBoxArrowUp } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledUserInfo>
        <img
          onClick={() => navigate("/profile")}
          src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
          alt="profile img"
        />
        <div>
          <h4>nickname</h4>
          <span>@khyun9685</span>
        </div>
      </StyledUserInfo>
      <StyledContent>
        <p>ㅇㅇ</p>
      </StyledContent>
      <div className="time">
        <time>2:10 PM · Sep 10, 2022 · </time>
        <span>Twitter Web App</span>
      </div>

      <StyledUserInfoBOx>
        <div color="skyblue">
          <StyledIconBox backcolor="skyblue">
            <BiMessageRounded size="1.3rem" />
          </StyledIconBox>
        </div>
        <div color="lightgreen">
          <StyledIconBox backcolor="lightgreen">
            <AiOutlineRetweet size="1.3rem" />
          </StyledIconBox>
        </div>
        <div color="lightpink">
          <StyledIconBox backcolor="lightpink">
            <FaHeart color="red" size="1.3rem" />
          </StyledIconBox>
        </div>
        <div>
          <StyledIconBox backcolor="skyblue">
            <BsBoxArrowUp size="1.3rem" />
          </StyledIconBox>
        </div>
      </StyledUserInfoBOx>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  .time {
    color: #8e8e8e;
    margin-left: 15px;
  }
`;

const StyledUserInfo = styled.div`
  display: flex;
  margin-top: 50px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 15px 0 15px;
  }
  div {
    margin-top: 20px;
  }
  h4 {
    margin: 0;
  }
  span {
    color: #8e8e8e;
  }
`;

const StyledContent = styled.div`
  width: 100%;
  margin: 0 15px;
  font-size: 1.5rem;
`;

const StyledUserInfoBOx = styled.div`
  width: 90%;
  display: flex;
  padding: 10px;
  margin: 15px auto 0 auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
`;

const StyledIconBox = styled.text`
  background-color: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.backcolor};
    border-radius: 9999px;
    color: black;
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export default Content;
