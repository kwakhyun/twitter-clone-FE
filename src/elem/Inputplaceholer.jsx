import React, { forwardRef } from "react";
import styled from "styled-components";

const Inputplaceholer = forwardRef((props, ref) => {
  return (
    <WrapStyled>
      <StyledDiv>
        <IdInput
          ref={ref}
          name={props.name}
          type={props.type}
          onChange={props.onChange}
          placeholder={props.text}
          defaultValue={props.defaultValue}
          disabled={props.disabled}
        ></IdInput>
        <StyledSpan>{props.text}</StyledSpan>
      </StyledDiv>
    </WrapStyled>
  );
});

const IdInput = styled.input`
  margin: 20px 0 0 0;
  padding: 25px 0 5px 5px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  background-color: transparent;
  font-size: 1rem;
  line-height: 24px;
  width: 100%;
  &:disabled {
    background-color: rgb(210, 210, 210, 0.3);
  }
  &::placeholder {
    color: transparent;
  }
  &:not(:placeholder-shown) {
    outline: none;
    + span {
      position: absolute;
      top: 35%;
      left: 10px;
      pointer-events: none;
      font-size: 0.8rem;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
    }
  }
  &:focus {
    outline: none;
    border: 2px solid #1d9bf0;
    + span {
      position: absolute;
      top: 35%;
      left: 10px;
      color: #1d9bf0;
      pointer-events: none;
      font-size: 0.8rem;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: auto;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: -1;
  color: #536471;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
`;
const WrapStyled = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

export default Inputplaceholer;
