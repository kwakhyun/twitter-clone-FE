import React from "react";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { BiBell, BiMessageDetail } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
const Footer = () => {
  return (
    <Wrap>
      <StlyedFooterBox>
        <StlyedFooter>
          <RiHome7Fill size="30px" />
          <FiSearch size="30px" />
          <BiBell size="30px" />
          <BiMessageDetail size="30px" />
        </StlyedFooter>
      </StlyedFooterBox>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  max-height: 60px;
`;

const StlyedFooterBox = styled.div`
  display: flex;

  background-color: rgb(250, 250, 250, 1);
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 3px 0px;
`;

const StlyedFooter = styled.div`
  display: flex;
  margin: 5px auto;
  gap: 20px;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;
