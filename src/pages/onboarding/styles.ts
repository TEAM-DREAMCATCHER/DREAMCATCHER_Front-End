import styled from 'styled-components'

// NOTE: 다른 화면과 중복되는 layout
export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`

export const OnboardingLayout = styled(Layout)`
    padding-top: 400px;
`

export const CarouselBox = styled.div`
    width: 250px;
    overflow-x: hidden;
    margin: auto;
    position: relative;
    height: 170px;
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

    background-color: ${(props) => (props?.isCurrent ? '#fff' : '#D9D9D9')};
`

export const CarouselList = styled.ul<{ idx: number }>`
    color: #fff;
    display: flex;
    flex-wrap: nowrap;

    transform: translateX(${(props) => -250 * props.idx}px);

    &::after {
        content: '';
        display: block;
        width: 100px;
    }
`

export const CarouselItem = styled.li`
    text-align: center;
    width: 250px;
    min-width: 250px;
    height: 125px;
`

export const TitleBox = styled.div`
    margin-bottom: 26px;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 26px;
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
