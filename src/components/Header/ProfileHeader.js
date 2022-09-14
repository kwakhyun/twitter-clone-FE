import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const ProfileHeader = ({ isEdit, profile, TweetCount }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <StlyedHeaderBox>
        <StyledHeader>
          <StyledButton>
            {isEdit ? (
              <BsArrowLeft onClick={() => navigate("/profile")} />
            ) : (
              <BsArrowLeft className="arrow" onClick={() => navigate("/")} />
            )}
          </StyledButton>
          <StyledInfo>
            {isEdit ? (
              <h4>Edit profile</h4>
            ) : (
              <>
                <span className="name">{profile.nickname}</span>
                <span className="tweet">{TweetCount} Tweets</span>
              </>
            )}
          </StyledInfo>
        </StyledHeader>
        {isEdit ? (
          <StyledHeader>
            <StyledButton>
              <button type="submit" className="save">
                Save
              </button>
            </StyledButton>
          </StyledHeader>
        ) : null}
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
  .arrow {
  }
  .save {
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
  .name {
    font-size: 16px;
    font-weight: bold;
  }
  .tweet {
    font-size: 12px;
    color: #8e8e8e;
  }
`;

export default ProfileHeader;
