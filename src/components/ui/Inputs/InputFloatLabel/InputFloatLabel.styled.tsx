import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const InputTitle = styled.p`
  color: #909090;
`;

export const WrapperInput = styled.div<{
  color?: string;
  mb?: string;
  wrapperWidth?: string;
  wrapperHeight?: string;
  wrapperMinHeight?: string;
  padding?: string;
}>`
  ${({ color, mb, wrapperWidth, wrapperHeight, wrapperMinHeight, padding }) => css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: ${mb};
    height: ${wrapperHeight || '64px'};
    border: 1px solid #eaeaef;
    border-radius: 16px;
    width: ${wrapperWidth || '100%'};
    min-height: ${wrapperMinHeight};
    padding: ${padding};

    label {
      position: absolute;
      left: 20px;
      top: 50%;
      font-size: 16px;
      font-weight: 500;
      color: ${color || '#7F80AA'};
      background-color: transparent;
      pointer-events: none;
      transform: translateY(-50%);
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    &:focus-within label {
      top: 20px;
      font-size: 12px;
      font-weight: 500;
    }
  `};
`;

export const StyledInput = styled.input<{
  paddingInput?: string;
  heightInput?: string;
  textColor?: string;
}>`
  ${({ paddingInput, heightInput, textColor}) => css`
    padding: ${paddingInput || '0 20px'};
    height: ${heightInput || '45px'};
    color: ${textColor || '#50528C'}
  `};

  display: block;
  width: 100%;
  background-color: transparent;
  font-weight: 600;

  &:focus {
    outline: none;
  }

  &:not(:placeholder-shown) + label {
    top: 20px;
    font-size: 12px;
    font-weight: 500;
  }
`;
