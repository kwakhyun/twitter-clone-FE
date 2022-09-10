import React, { useRef, useState, forwardRef } from "react";
import styled from "styled-components";
const Inputplaceholer = ({ text, onChange, ref, name }) => {
  const InputRef = useRef(null);
  return (
    <WrapStyled>
      <StyledDiv>
        <IdInput
          ref={ref}
          name={name}
          type="text"
          onChange={onChange}
          placeholder={text}
        ></IdInput>
        <Labelstlyed>{text}</Labelstlyed>
      </StyledDiv>
    </WrapStyled>
  );
};
export default forwardRef(Inputplaceholer);

const IdInput = styled.input`
  margin: 15px 0;
  padding: 0px 5px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  background-color: transparent;
  font-size: 1rem;
  line-height: 24px;
  width: 100%;
  height: 50px;

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) {
    outline: none;
    + span {
      position: absolute;
      top: 19px;
      left: 3%;
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
      top: 19px;
      left: 3%;
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
  width: 70%;
  margin: auto;
`;

const Labelstlyed = styled.span`
  position: absolute;
  top: 35px;
  left: 3%;
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
