"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
  ellipsis?: boolean;
  nowrap?: boolean;
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
    ellipsis,
    nowrap,
    padding,
  }) => css`
    font-size: ${fontSize || "16px"};
    font-weight: ${fontWeight || 500};
    line-height: ${lineHeight || "21.86px"};
    color: ${color || "#161616"};
    letter-spacing: ${letterSpacing};
    text-align: ${textAlign};
    margin: ${margin};
    margin-left: ${ml};
    margin-top: ${mt};
    margin-bottom: ${mb};
    margin-right: ${mr};
    width: ${width};
    max-width: ${maxWidth};
    padding: ${padding};

    ${fontFamily &&
    css`
      font-family: ${fontFamily}, Manrope, sans-serif;
    `}

    ${ellipsis &&
    css`
      overflow: ${ellipsis ? "hidden" : ""};
      text-overflow: ${ellipsis ? "ellipsis" : ""};
      white-space: ${ellipsis ? "nowrap" : ""};
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
  mb?: string;
  mt?: string;
  mr?: string;
  padding?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  border?: string;
  bgColor?: string;
  color?: string;
  cursor?: string;
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
    height,
    width,
    borderRadius,
    border,
    bgColor,
    color,
    cursor,
  }) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${dir || "row"};
    gap: ${gap};
    margin-bottom: ${mb};
    margin-top: ${mt};
    margin-right: ${mr};
    padding: ${padding};
    height: ${height};
    width: ${width};
    border-radius: ${borderRadius};
    border: ${border};
    background-color: ${bgColor};
    color: ${color};
    cursor: ${cursor};
  `};
`;
