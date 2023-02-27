import { AuthButtonStyled } from '@/components/common/styles/button'
import { Layout } from '@/components/common/styles/layout'
import styled from 'styled-components'

export const WelcomeLayout = styled(Layout)`
    ${({ theme }) => theme.layouts.flexBetweenColumn};

    padding: 85px 20px 51px;
    text-align: center;
`

export const Heading = styled.h1`
    ${({ theme }) => theme.fonts.title26};
`

export const Desc = styled.p`
    ${({ theme }) => theme.fonts.title16};
    color: ${({ theme }) => theme.colors.gray1};

    margin: 25px 0 130px;
    line-height: 19px;
`

export const Button = styled(AuthButtonStyled)``
