import { AuthButtonStyled } from '@/components/common/styles/button'
import { Layout } from '@/components/common/styles/layout'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
    height: 58px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #ffffff;

    margin-bottom: 13px;
`

export const SigninLayout = styled(Layout)`
    padding: 22px 21px;
`

export const Button = styled(AuthButtonStyled)`
    margin-top: 50px;
`

export const SignupButton = styled(Link)`
    display: block;
    width: fit-content;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    text-align: center;
    text-decoration-line: underline;
    color: #ffffff;
    opacity: 0.5;

    margin: 20px auto 0;
`
