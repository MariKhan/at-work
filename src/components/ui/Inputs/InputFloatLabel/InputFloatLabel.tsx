import React, { KeyboardEventHandler, forwardRef } from 'react';
import { WrapperInput, StyledInput, InputTitle } from './InputFloatLabel.styled';

export interface IInput {
  type?: string;
  title?: string;
  value?: string | number | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPass?: boolean;
  required?: boolean;
  disabled?: boolean;
  inputWidth?: string;
  heightInput?: string;
  wrapperWidth?: string;
  inputTitle?: boolean;
  borderColor?: string;
  mb?: string;
  padding?: string;
  placeholderPoint?: boolean;
  placeholder?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  color?: string;
  textAlign?: string;
  pattern?: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onInput?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement> | undefined;
  autoFocus?: boolean;
  maxLength?: number;
  label?: string;
  children?: React.ReactNode;
  minHeight?: string;
  wrapperHeight?: string;
  wrapperMinHeight?: string;
  paddingInput?: string;
    textColor?: string;
}

const InputFloatLabel: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    title,
    value,
    onChange,
    required,
    disabled,
    heightInput,
    inputTitle = true,
    mb,
    placeholder,
    color,
    pattern,
    onInput,
    autoFocus,
    maxLength,
    onKeyUp,
    onKeyPress,
    label,
    wrapperWidth,
    children,
    wrapperHeight,
    wrapperMinHeight,
    padding,
    paddingInput, textColor,
  },
  ref,
) => {
  return (
    <WrapperInput
      mb={mb}
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      wrapperMinHeight={wrapperMinHeight}
      padding={padding}>
      {inputTitle && <InputTitle>{title}</InputTitle>}
      {children}

      <StyledInput
        ref={ref}
        type='text'
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        disabled={disabled}
        required={required}
        height={heightInput}
        textColor={textColor}
        color={color}
        pattern={pattern}
        onInput={onInput}
        autoFocus={autoFocus}
        maxLength={maxLength}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        paddingInput={paddingInput}
      />
      <label>{label}</label>
    </WrapperInput>
  );
};

export default  forwardRef(InputFloatLabel);
