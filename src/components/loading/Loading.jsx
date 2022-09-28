import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return <StyledLoading>Loading</StyledLoading>;
};

const StyledLoading = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
