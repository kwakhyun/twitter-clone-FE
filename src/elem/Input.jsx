import React from "react";
import styled from "styled-components";
import { Text } from ".";

const Input = (props) => {
  const {
    hei,
    type,
    label,
    name,
    placeholder,
    multiLine,
    _onChange,
    _value,
    _onKeyPress,
    ref,
  } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        {label && <Text margin="20px 5px 10px 0">{label}</Text>}
        <TextArea
          placeholder={placeholder}
          rows={20}
          ref={ref}
          name={name}
          onChange={_onChange}
          value={_value}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {label && <Text margin="20px 5px 5px 0">{label}</Text>}
      <NormalInput
        ref={ref}
        name={name}
        hei={hei}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        value={_value}
        onKeyPress={_onKeyPress}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "",
  multiLine: false,

  _onChange: () => {},
  _onKeyPress: () => {},
};

const NormalInput = styled.input`
  height: ${(props) => props.hei};
  border: 3px solid #c4c4c4;
  border-radius: 6px;
  width: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
  display: block;
  margin-top: 15px;

  &:focus {
    outline: none;
    border: 2px solid #54bab9;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  width: 100%;
  height: 40%;
  padding: 8px 8px;
  box-sizing: border-box;
  resize: none;
  overflow: auto;
  margin-top: 15px;
  &:focus {
    outline: none;
    border: 1px solid #54bab9;
    &::placeholder {
      opacity: 0;
    }
  }
`;

export default Input;
