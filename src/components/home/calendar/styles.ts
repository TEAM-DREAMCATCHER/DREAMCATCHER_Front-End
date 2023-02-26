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

export const ShineBox = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.effects.shine.main}
    background-color : ${({ theme }) => theme.colors.white};

    border-radius: 50%;
`
