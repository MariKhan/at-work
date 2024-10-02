'use client';
import React from 'react';
import { css, Global } from '@emotion/react';
import normalize from 'styled-normalize';

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
          background: #f9f9f9;
          font-family: Montserrat, sans-serif;
          overflow: hidden;
          white-space: pre-line;


        }

        html,
        body {
          height: 100vh;

          //@media screen and (max-width: 500px) {
          //    height: 100%;
          //}
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
