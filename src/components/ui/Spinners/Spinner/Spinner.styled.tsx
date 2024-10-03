import styled from '@emotion/styled';

export const LdsSpinner = styled.div<{ disabledMargin?: boolean; spinnerColor?: string }>`
  color: #909090;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
  margin-top: ${({ disabledMargin }) => (disabledMargin ? '0' : '44px')};

  div {
    transform-origin: 40px 40px;
    animation: LdsSpinner 1.2s linear infinite;
  }

  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 30px;
    left: 39px;
    width: 2px;
    height: 6px;
    border-radius: 20%;
    background: ${({ spinnerColor }) => (spinnerColor ? spinnerColor : '#1e2057')};
  }

  div:nth-of-type(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  div:nth-of-type(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  div:nth-of-type(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  div:nth-of-type(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  div:nth-of-type(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  div:nth-of-type(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  div:nth-of-type(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  div:nth-of-type(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  div:nth-of-type(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  div:nth-of-type(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  div:nth-of-type(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  div:nth-of-type(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes LdsSpinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
