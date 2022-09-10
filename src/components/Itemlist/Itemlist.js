import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
const ItemList = ({ children }) => {
  return (
    <StyledItemContainer>
      <Item />
      <Item />
      <Item />
    </StyledItemContainer>
  );
};

export default ItemList;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto 0 auto;
`;
