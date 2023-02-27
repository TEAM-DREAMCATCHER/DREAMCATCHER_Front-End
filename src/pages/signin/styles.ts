import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AuthButtonStyled } from '@/components/common/styles/button'
import { Layout } from '@/components/common/styles/layout'

export const Header = styled.header`
    height: 58px;
`

export const Main = styled.main`
    ${({ theme }) => theme.layouts.flexColumn};
    gap: 10px;
`

export const Heading = styled.h1`
    ${({ theme }) => theme.fonts.title26};

    line-height: 31px;
    margin-bottom: 13px;
`

export const SigninLayout = styled(Layout)`
    padding: 22px 21px;
`

export const Button = styled(AuthButtonStyled)`
    margin-top: 50px;
`

export const SignupButton = styled(Link)`
    ${({ theme }) => theme.fonts.text14};

    display: block;
    width: fit-content;

    text-decoration-line: underline;
    color: #ffffff;
    opacity: 0.5;
    margin: 20px auto 0;
`
