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
  margin: 15px auto 10px auto;
  padding: 12px 0 0 10px;
  border: 1px solid rgb(214, 218, 227);
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.2rem;
  line-height: 24px;
  width: 230px;
  height: 50px;

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid rgb(051, 153, 255, 0.9);
    + label {
      position: absolute;
      top: 19px;
      left: 15%;
      color: rgb(051, 153, 255, 0.9);
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
    border: 1px solid rgb(051, 153, 255, 0.9);

    + label {
      position: absolute;
      top: 19px;
      left: 15%;
      color: rgb(051, 153, 255, 0.9);
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

const Labelstlyed = styled.label`
  position: absolute;
  top: 34px;
  left: 15%;
  z-index: -1;
  color: rgb(200, 200, 200);
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
