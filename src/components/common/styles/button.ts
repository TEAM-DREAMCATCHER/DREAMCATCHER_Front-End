import styled from 'styled-components'

export const AuthButtonStyled = styled.button`
    ${({ theme }) => theme.fonts.title18};
    background: ${({ theme }) => theme.colors.linear.purple};

    width: 100%;
    height: 58px;
    border-radius: 29px;

    color: #000000;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
