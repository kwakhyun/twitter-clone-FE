import React from "react";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { BiBell, BiMessageDetail } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <StyledWrap>
      <StyledFooterBox>
        <StyledFooter>
          <RiHome7Fill
            size="30px"
            onClick={() => {
              navigate("/");
            }}
          />
          <FiSearch size="30px" />
          <BiBell size="30px" />
          <BiMessageDetail size="30px" />
        </StyledFooter>
      </StyledFooterBox>
    </StyledWrap>
  );
};

export default Footer;

const StyledWrap = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  max-height: 60px;
`;

const StyledFooterBox = styled.div`
  display: flex;

  background-color: rgb(250, 250, 250, 1);
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 3px 0px;
`;

const StyledFooter = styled.div`
  display: flex;
  margin: 5px auto;
  gap: 20px;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;
