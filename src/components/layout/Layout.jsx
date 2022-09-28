import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Layouts>{children}</Layouts>;
};

export default Layout;

const Layouts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  height: 100%;
  margin: auto;
`;
