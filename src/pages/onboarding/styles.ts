import { AuthButtonStyled } from '@/components/common/styles/button'
import { Layout } from '@/components/common/styles/layout'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OnboardingLayout = styled(Layout)`
    padding: 110px 20px 150px;
    height: 100vh;
    max-height: fit-content;
`

export const CarouselBox = styled.div`
    position: relative;
    width: 265px;
    margin: auto;
    padding-bottom: 30px;
    overflow-x: hidden;
`

export const CarouselImgBox = styled.div`
    ${({ theme }) => theme.layouts.flexCenter}

    width: 265px;
    height: 230px;

    margin-bottom: 40px;
`

export const CarouselNav = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    gap: 12px;
`

export const CarouselNavItem = styled.li<{ isCurrent?: boolean }>`
    background-color: ${({ theme }) => theme.colors.white};
    opacity: ${(props) => (props?.isCurrent ? '1' : '0.3')};

    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

export const CarouselList = styled.ul<{ idx: number }>`
    display: flex;
    flex-wrap: nowrap;

    transform: translateX(${(props) => -265 * props.idx}px);

    &::after {
        content: '';
        display: block;
        width: 100px;
    }
`

export const CarouselItem = styled.li`
    width: 265px;
    min-width: 265px;
    text-align: center;
`

export const TitleBox = styled.div`
    margin-bottom: 26px;
`

export const Title = styled.h2`
    ${({ theme }) => theme.fonts.title26}

    line-height: 31px;
    text-align: center;
`

export const Desc = styled.p`
    ${({ theme }) => theme.fonts.text14};
    color: ${({ theme }) => theme.colors.gray1};

    line-height: 19px;
    text-align: center;
`

export const Button = styled(AuthButtonStyled)`
    ${({ theme }) => theme.fonts.title16};
    ${({ theme }) => theme.layouts.flexCenter};

    gap: 20px;
    margin-top: 74px;
`

export const SigninButton = styled(Link)`
    ${({ theme }) => theme.fonts.text14};
    color: ${({ theme }) => theme.colors.gray2};

    display: block;
    width: fit-content;

    line-height: 17px;

    text-align: center;
    text-decoration-line: underline;

    margin: 25px auto 0;
`
