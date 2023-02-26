import styled from 'styled-components'

export const CalendarLayout = styled.div`
    position: relative;
    /* NOTE: 혹시 좋은 방법이 있다면 알려주세요! - to 감자 */
    width: calc(100% + 20px);
    display: flex;
    gap: 18px;
    padding: 20px 10px 10px;
    overflow-y: hidden;
    overflow-x: auto;
    left: -10px;
    margin-top: 34px;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.gray0};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
`

export const EmptyBox = styled.div`
    text-align: center;
    margin: 54px auto 0;
    gap: 6px;
    line-height: 20px;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    ${({ theme }) => theme.layouts.flexCenterColumn}
    ${({ theme }) => theme.fonts.text13}
    background: ${({ theme }) => theme.colors.linear.purple};
`

export const ShineBox = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    ${({ theme }) => theme.effects.shine.main}
    background-color : ${({ theme }) => theme.colors.white};
`

export const Heading = styled.h1`
    line-height: 29px;
    display: flex;
    margin-top: 63px;
    margin-bottom: 18px;

    ${({ theme }) => theme.fonts.title24}
    color: ${({ theme }) => theme.colors.white};
`

export const SubHeading = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: ${({ theme }) => theme.colors.white};
`
