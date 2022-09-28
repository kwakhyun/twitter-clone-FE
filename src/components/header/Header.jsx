import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { useQuery } from "react-query";
import { proflieAPI } from "../../shared/api";

const Header = () => {
  const navigate = useNavigate();
  const { data } = useQuery("getProfile", proflieAPI.myProfile);
  const profile = data?.data.data;

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/first");
    }
  }, [navigate]);

  return (
    <StyledWrap>
      <StlyedHeaderBox>
        <StyledHeader>
          <StlyedUserImage
            onClick={() => navigate("/profile")}
            src={profile?.imageUrl}
          />
          <span>Home</span>
        </StyledHeader>
        <StyledHeader>
          <FaTwitter size="25px" color="rgb(051,153,255,0.9)" />
        </StyledHeader>
      </StlyedHeaderBox>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 50px;
  z-index: 2;
`;

const StlyedHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255, 0.9);
`;

const StyledHeader = styled.div`
  display: flex;
  margin: 5px 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const StlyedUserImage = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

export default Header;
