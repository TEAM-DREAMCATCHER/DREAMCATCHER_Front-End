import { AuthButtonStyled } from '@/components/common/styles/button'
import styled from 'styled-components'

export const Header = styled.header`
    height: 58px;
`
export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`

export const SignupLayout = styled(Layout)`
    padding: 24px 20px 34px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Heading = styled.h1`
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 20px;
`

export const Button = styled(AuthButtonStyled)``
