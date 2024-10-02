import React, { FC } from 'react';
import { ButtonStyled, ButtonWrapper } from './Button.styled';

export interface IButton {
  height?: string;
  background?: string;
  textColor?: string;
  border?: string;
  outlinedTextColor?: string;
  borderHeight?: string;
  borderRadius?: string;
  padding?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  outlined?: boolean;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  mb?: string;
  mt?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  icon?: boolean;
  active?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  hoverColor?: string;
  borderColor?: string;
  iconPadding?: string;
  loadingColor?: string;
}

const Button: FC<IButton> = ({
  height,
  background,
  textColor,
  border,
  outlinedTextColor,
  borderHeight,
  borderRadius,
  padding,
  color,
  // textAlign,
  fontSize,
  fontWeight,
  lineHeight,
  outlined,
  justifyContent,
  alignItems,
  gap,
  mb,
  mt,
  type,
  icon,
  active,
  disabled,
  isLoading,
  children,
  onClick,
  style,
  hoverColor,
  borderColor,
  iconPadding,
  loadingColor,
}) => {
  return (
    <ButtonWrapper
      height={height}
      background={background}
      isLoading={isLoading}
      loadingColor={loadingColor}
      mb={mb}
      mt={mt}>
      <ButtonStyled
        height={height}
        background={background}
        textColor={textColor}
        border={border}
        outlinedTextColor={outlinedTextColor}
        borderHeight={borderHeight}
        borderRadius={borderRadius}
        padding={padding}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        outlined={outlined}
        justifyContent={justifyContent}
        alignItems={alignItems}
        gap={gap}
        type={type}
        icon={icon}
        active={active}
        disabled={disabled}
        isLoading={isLoading}
        onClick={onClick}
        style={style}
        hoverColor={hoverColor}
        borderColor={borderColor}
        iconPadding={iconPadding}>
        {children}
      </ButtonStyled>
    </ButtonWrapper>
  );
};

export default Button;
