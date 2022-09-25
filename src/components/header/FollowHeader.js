import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const FollowHeader = ({ nickname, userId }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <StlyedHeaderBox>
        <StyledHeader>
          <StyledButton>
            <BsArrowLeft className="arrow" onClick={() => navigate(-1)} />
          </StyledButton>
          <StyledInfo>
            <span className="nickname">{nickname}</span>
            <span className="userId">@{userId}</span>
          </StyledInfo>
        </StyledHeader>
      </StlyedHeaderBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 50px;
  z-index: 10;
`;
const StlyedHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.7);
  width: 100%;
  height: 50px;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  margin: 5px 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  .save {
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 20px;
    padding: 8px 18px;
  }
  .logout {
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 20px;
    padding: 8px 18px;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  .nickname {
    font-size: 16px;
    font-weight: bold;
  }
  .userId {
    font-size: 12px;
    color: #8e8e8e;
  }
`;

export default FollowHeader;
