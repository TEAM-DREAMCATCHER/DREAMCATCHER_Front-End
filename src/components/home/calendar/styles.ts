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
        width: 5px;
        &:horizontal {
            height: 5px;
        }
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.gray0};
        border-radius: 10px;
        height: 50%;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
`

export const EmptyBox = styled.div`
    ${({ theme }) => theme.layouts.flexCenterColumn}
    ${({ theme }) => theme.fonts.text13}
    background: ${({ theme }) => theme.colors.linear.purple};

    text-align: center;
    margin: 54px auto 0;
    gap: 6px;
    line-height: 20px;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const ShineBox = styled.div`
    ${({ theme }) => theme.effects.shine.main}
    ${({ theme }) => theme.layouts.flexCenter}
    background-color : ${({ theme }) => theme.colors.white};

    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 50%;
`

export const Heading = styled.h1`
    ${({ theme }) => theme.fonts.title24}
    color: ${({ theme }) => theme.colors.white};

    line-height: 29px;
    display: flex;
    margin-top: 63px;
    margin-bottom: 18px;
`

export const SubHeading = styled.p`
    ${({ theme }) => theme.fonts.title24}
    color: ${({ theme }) => theme.colors.white};

    line-height: 29px;
`
