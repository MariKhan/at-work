import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const InputTitle = styled.p`
  color: #161616;
  font-weight: 600;
  font-size: 18px;
  line-height: 24.59px;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) and (min-width: 375px) {
    font-size: 16px;
    line-height: 21.86px;
  }
`;

export const StyledInput = styled.input<{
  mb?: string;
  height?: string;
}>`
  ${({ mb, height }) => css`
    margin-bottom: ${mb || "24px"};
    position: relative;
    padding: 8px 16px;
    width: 100%;
    height: ${height || "42px"};
    color: #595959;
    background: #fdfdfd;
    font-size: 16px;
    line-height: 21.86px;
    font-weight: 500;
    border: 2px solid #dadada;
    border-radius: 50px;
    outline: none;
    transition: 0.3s;

    @media screen and (max-width: 900px) and (min-width: 375px) {
      font-size: 14px;
      line-height: 19.12px;
      mb: "24px";
    }
    ::placeholder {
      color: #161616;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
  `}
`;
