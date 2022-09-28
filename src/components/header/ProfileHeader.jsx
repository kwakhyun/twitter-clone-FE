import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Modal } from "../index";

const ProfileHeader = ({ isEdit, profile, TweetCount }) => {
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <StyledWrap>
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
                <span className="name">{profile?.nickname}</span>
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
        ) : (
          localStorage.getItem("user_id") === profile?.userId && (
            <StyledHeader>
              <StyledButton>
                <button
                  className="logout"
                  onClick={() => {
                    setLogoutModal(true);
                  }}
                >
                  Log out
                </button>
              </StyledButton>
            </StyledHeader>
          )
        )}
      </StlyedHeaderBox>

      {logoutModal && (
        <Modal closeModal={() => setLogoutModal(!logoutModal)}>
          {/* <FaTwitter className="icon" size="2rem" color="#1d9bf0" /> */}
          <ModalStyled>
            <span>Log out of Twitter?</span>
            <p>
              You can always log back in at any time. If you just want to switch
              accounts, you can do that by adding an existing account.
            </p>
            <button
              onClick={() => {
                localStorage.removeItem("user_id");
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                navigate("/first");
                setLogoutModal(!logoutModal);
              }}
            >
              Log out
            </button>
          </ModalStyled>
        </Modal>
      )}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
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
  .name {
    font-size: 16px;
    font-weight: bold;
  }
  .tweet {
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const ModalStyled = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
  p {
    font-size: 0.9rem;
    margin-top: 4px;
    margin-bottom: 20px;
  }
  button {
    border: 1px solid rgb(220, 220, 220);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 12%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: black;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    transition: 0.3s;
    &:hover {
      background-color: rgb(40, 40, 40);
      cursor: pointer;
    }
  }
`;

export default ProfileHeader;
