"use client";
import React from "react";
import { css, Global } from "@emotion/react";
import normalize from "styled-normalize";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${normalize}
        * {
          padding: 0;
          margin: 0;
          border: 0;
          box-sizing: border-box;
        }

        body {
          background: #f4f4f4;
          font-family: Manrope, sans-serif;
          overflow: auto;
        }

        html,
        body {
          height: 100vh;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
