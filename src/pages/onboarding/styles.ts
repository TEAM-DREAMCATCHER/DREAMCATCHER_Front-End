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
    width: 265px;

    overflow-x: hidden;
    margin: auto;
    position: relative;
    padding-bottom: 30px;
`
export const CarouselImgBox = styled.div`
    width: 265px;
    height: 230px;

    margin-bottom: 40px;
    ${({ theme }) => theme.layouts.flexCenter}
`

export const CarouselNav = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 12px;
    left: 0;
    right: 0;
    justify-content: center;
`

export const CarouselNavItem = styled.li<{ isCurrent?: boolean }>`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: ${(props) => (props?.isCurrent ? '1' : '0.3')};
`

export const CarouselList = styled.ul<{ idx: number }>`
    color: #fff;
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
    text-align: center;
    width: 265px;
    min-width: 265px;
    /* height: 125px; */
`

export const TitleBox = styled.div`
    margin-bottom: 26px;
`

export const Title = styled.h2`
    ${({ theme }) => theme.fonts.title26}
    line-height: 31px;
    text-align: center;

    color: #ffffff;
`

export const Desc = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #b0b0b0;
`

export const Button = styled(AuthButtonStyled)`
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 74px;
`

export const SigninButton = styled(Link)`
    display: block;
    width: fit-content;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    text-align: center;
    text-decoration-line: underline;
    color: #7d7d7d;

    margin: 25px auto 0;
`
