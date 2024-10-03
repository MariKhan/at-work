import styled, { keyframes } from 'styled-components';

export const PageSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const PageSpinner = styled.div<{ width?: string; height?: string }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #373d70;
  background: transparent;
  width: ${({ width }) => (width ? width : '24px')};
  height: ${({ height }) => (height ? height : '24px')};
  border-radius: 50%;
`;
