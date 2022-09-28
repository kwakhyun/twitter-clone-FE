import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const DetailHeader = ({ isEdit }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/first");
    }
  }, [navigate]);

  return (
    <StyledWrap>
      <StlyedHeaderBox>
        <StyledHeader>
          <StyledButton>
            {isEdit ? (
              <BsArrowLeft onClick={() => navigate("/profile")} />
            ) : (
              <BsArrowLeft className="arrow" onClick={() => navigate(-1)} />
            )}
          </StyledButton>
          <StyledInfo>
            <h4>Go back</h4>
          </StyledInfo>
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
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export default DetailHeader;
