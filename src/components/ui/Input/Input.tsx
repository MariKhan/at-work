import React, { forwardRef, Fragment } from "react";
import { InputTitle, StyledInput } from "./Input.styled";
import { CSSProperties } from "styled-components";

export interface IInput {
  type?: string;
  title?: string;
  value?: string | number | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: string;
  mb?: string;
  onClick?: () => void;
  placeholder?: string;
  textAlign?: string;
  placeholderColor?: string;
  readOnly?: boolean;
  style?: CSSProperties;
  borderColor?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    title,
    value,
    onChange,
    height,
    inputTitle = true,
    mb,
    placeholder,
    textAlign,
    onClick,
    readOnly,
    style,
    borderColor,
  },
  ref,
) => {
  return (
    <>
      {inputTitle && <InputTitle>{title}</InputTitle>}
      <StyledInput
        ref={ref}
        type="text"
        mb={mb}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        height={height}
        onClick={onClick}
        textAlign={textAlign}
        readOnly={readOnly}
        style={style}
        borderColor={borderColor}
      />
    </>
  );
};

export default forwardRef(Input);
