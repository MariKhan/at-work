import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ButtonWrapper = styled.div<{
  height?: string;
  background?: string;
  isLoading?: boolean;
  loadingColor?: string;
  mb?: string;
  mt?: string;
}>`
  ${({ height, isLoading, background, loadingColor, mb, mt }) => css`
    margin-bottom: ${mb};
    margin-top: ${mt};
    width: 100%;

    ${isLoading &&
    css`
      background: ${background || '#50528C'};
      border-radius: 53px;
      position: relative;
      height: ${height || '56px'};
      overflow: hidden;

      &::before {
        content: '';
        background: ${loadingColor === 'orange'
          ? 'conic-gradient(transparent 270deg, #fff, transparent)'
          : 'conic-gradient(transparent 270deg, #FD6E08, transparent)'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        aspect-ratio: 1;
        width: 100%;
        animation: rotate 2s linear infinite;
      }

      /* Overlay */

      &::after {
        content: '';
        background: ${background || '#50528C'};
        border-radius: inherit;
        position: absolute;
        inset: 3px;
      }
    `}
  `}
`;

export const ButtonStyled = styled.button<{
  outlined?: boolean;
  background?: string;
  border?: string;
  outlinedTextColor?: string;
  borderHeight?: string;
  borderRadius?: string;
  textColor?: string;
  padding?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  icon?: boolean;
  gap?: string;
  type?: string;
  active?: boolean;
  justifyContent?: string;
  alignItems?: string;
  isLoading?: boolean;
  hoverColor?: string;
  borderColor?: string;
  iconPadding?: string;
}>`
  ${({
    height,
    outlined,
    background,
    border,
    outlinedTextColor,
    borderHeight,
    borderRadius,
    textColor,
    padding,
    fontSize,
    lineHeight,
    fontWeight,
    icon,
    gap,
    active,
    justifyContent,
    alignItems,
    isLoading,
    hoverColor,
    borderColor,
    iconPadding,
  }) => css`
    display: flex;
    justify-content: ${justifyContent || 'center'};
    width: 100%;
    height: ${height || '56px'};
    background: ${background};
    padding: ${padding};
    font-size: ${fontSize || '16px'};
    line-height: ${lineHeight || '24px'};
    font-weight: ${fontWeight || 600};
    border-radius: ${borderRadius || '53px'};
    cursor: pointer;
    white-space: nowrap;
    outline: none;

    align-items: ${alignItems || 'center'};

    &:disabled {
      opacity: 0.24;
      pointer-events: none;
    }

    // &:hover {
    //   background: ${hoverColor};
    //   border-color: ${borderColor};
    // }
    &:active {
      transform: translateY(2px); /* Move button slightly down on click */
      background: ${hoverColor};
      border-color: ${borderColor};
    }

    ${icon &&
    css`
      display: flex;
      padding: ${iconPadding || '10px 0 10px 10px'};
      align-items: center;
      gap: ${gap || '4px'};
    `};

    ${outlined
      ? css`
          color: ${outlinedTextColor || '#50528C'};
          border: ${borderHeight || '1px'} solid ${border};
          align-items: center;
          background: none;
        `
      : css`
          /* Кнопка с заливкой */
          background: ${active ? '#50528C' : background};
          color: ${active ? '#fff' : textColor || '#fff'};
        `};

    ${isLoading &&
    css`
      background: transparent;
      position: absolute;
      z-index: 10;
    `};

    @keyframes rotate {
      from {
        transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
      }

      to {
        transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
      }
    }
  `}
`;
