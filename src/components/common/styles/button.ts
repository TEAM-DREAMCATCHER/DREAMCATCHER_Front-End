import styled from 'styled-components'

export const AuthButtonStyled = styled.button`
    width: 100%;
    height: 58px;

    background: linear-gradient(126.87deg, #b9a1cf 16.19%, #635273 83.65%);
    border-radius: 29px;

    font-weight: 600;
    font-size: 18px;
    color: #000000;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
