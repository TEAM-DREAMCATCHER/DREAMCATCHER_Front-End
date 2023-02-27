import { Layout } from '@/components/common/styles/layout'
import styled from 'styled-components'

export const LandingLayout = styled(Layout)`
    ${({ theme }) => theme.layouts.flexCenterColumn}
`

export const LogoBox = styled.div`
    animation-name: animation;
    animation-duration: 0.8s;
    animation-timing-function: linear;
    @keyframes animation {
        from {
            opacity: 0.8;
        }

        to {
            opacity: 1;
        }
    }
`

export const Heading = styled.h1`
    margin-top: 32px;
    ${({ theme }) => theme.fonts.title24}

    animation-name: animation;
    animation-duration: 0.8s;
    animation-timing-function: linear;

    @keyframes animation {
        from {
            opacity: 0.8;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`
