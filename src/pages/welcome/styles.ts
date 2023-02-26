import { AuthButtonStyled } from '@/components/common/styles/button'
import styled from 'styled-components'

export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`

export const WelcomeLayout = styled(Layout)`
    padding: 85px 20px 51px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #ffffff;
`

export const Button = styled(AuthButtonStyled)``
