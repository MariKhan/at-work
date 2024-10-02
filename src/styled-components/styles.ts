'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Text = styled.div<{
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  margin?: string;
  ml?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  width?: string;
  maxWidth?: string;
  pt?: string;
  ellipsis?: boolean;
  nowrap?: boolean;
  pl?: string;
  padding?: string;
}>`
  ${({
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    margin,
    ml,
    mt,
    mb,
    mr,
    width,
    maxWidth,
    pt,
    ellipsis,
    nowrap,
    pl,
    padding,
  }) => css`
    font-size: ${fontSize || '18px'};
    font-weight: ${fontWeight || 400};
    line-height: ${lineHeight || '20px'};
    color: ${color || 'black'};
    letter-spacing: ${letterSpacing};
    text-align: ${textAlign};
    margin: ${margin};
    margin-left: ${ml};
    margin-top: ${mt};
    margin-bottom: ${mb};
    margin-right: ${mr};
    width: ${width};
    max-width: ${maxWidth};
    padding-top: ${pt};
    padding-left: ${pl};
    padding: ${padding};

    ${fontFamily &&
    css`
      font-family: ${fontFamily}, Montserrat, sans-serif;
    `}

    ${ellipsis &&
    css`
      overflow: ${ellipsis ? 'hidden' : ''};
      text-overflow: ${ellipsis ? 'ellipsis' : ''};
      white-space: ${ellipsis ? 'nowrap' : ''};
    `}

        ${nowrap &&
    css`
      white-space: nowrap;
    `}
  `}
`;

export const FlexDir = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  dir?: string;
  gap?: string;
  disabled?: boolean;
  mb?: string;
  mt?: string;
  mr?: string;
  pl?: string;
  pt?: string;
  padding?: string;
  bBottom?: boolean;
  bColor?: string;
  alignSelf?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  border?: string;
  bgColor?: string;
  boxShadow?: string;
  minHeight?: string;
  color?: string;
  cursor?: string;
  bRight?: boolean;
  bLeft?: boolean;
  minWidth?: string;
}>`
  ${({
    alignItems,
    justifyContent,
    dir,
    gap,
    mb,
    mt,
    mr,
    padding,
    bBottom,
    bColor,
    alignSelf,
    height,
    width,
    borderRadius,
    border,
    bgColor,
    boxShadow,
    minHeight,
    color,
    cursor,
    bRight,
    bLeft,
    minWidth,
    pt,
    disabled,
    pl,
  }) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-self: ${alignSelf};
    flex-direction: ${dir || 'row'};
    gap: ${gap};
    padding-left: ${pl};
    padding-top: ${pt};
    margin-bottom: ${mb};
    margin-top: ${mt};
    margin-right: ${mr};
    padding: ${padding};
    border-bottom: ${bBottom ? `1px solid ${bColor}` : 'none'};
    border-right: ${bRight ? `1px solid ${bColor}` : 'none'};
    border-left: ${bLeft ? `1px solid ${bColor}` : 'none'};
    border-color: ${bColor};
    height: ${height};
    width: ${width};
    min-width: ${minWidth};
    border-radius: ${borderRadius};
    border: ${border};
    background-color: ${bgColor};
    box-shadow: ${boxShadow};
    min-height: ${minHeight};
    color: ${color};
    cursor: ${cursor};
    opacity: ${disabled ? '0.5' : '1'};
  `};
`;


