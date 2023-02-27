import { AuthButtonStyled } from '@/components/common/styles/button'
import { Layout } from '@/components/common/styles/layout'
import styled from 'styled-components'

export const Header = styled.header`
    height: 58px;
`

export const SignupLayout = styled(Layout)`
    ${({ theme }) => theme.layouts.flexBetweenColumn};

    padding: 24px 20px 34px;
    align-items: stretch;
`

export const Flex = styled.div`
    ${({ theme }) => theme.layouts.flexColumn};

    gap: 10px;
`

export const Heading = styled.h1`
    ${({ theme }) => theme.fonts.title26};

    line-height: 31px;
    margin-bottom: 13px;
`

export const Button = styled(AuthButtonStyled)``
