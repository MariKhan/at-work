import styled from '@emotion/styled';
import { css } from '@emotion/react';


export const HeaderStyled = styled.div<{ theme?: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 100px 0 100px;

    @media screen and (max-width: 500px) and (min-width: 300px) {
        padding: 8px 20px 12px 20px;
        ${({ theme }) =>
                theme === 'light' &&
                css`
                    background: #fff;
                `}
    }
`;
