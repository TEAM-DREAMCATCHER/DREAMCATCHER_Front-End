import styled from 'styled-components'

export const CategoryLayout = styled.div`
    background: ${({ theme }) => theme.colors.black};
`
export const CategoryList = styled.ul`
    ${({ theme }) => theme.layouts.flexStart};
    padding: 10px 22px;
    position: relative;
    height: 50px;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #635273;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        max-width: 10px;
        background-color: ${({ theme }) => theme.colors.black};
    }
`
export const CategoryItem = styled.li<{ isChosen: Boolean }>`
    padding: 5px 10px;
    ${({ theme }) => theme.fonts.text13};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: ${({ theme }) => theme.colors.white} 1px 0 10px;
    background: ${({ isChosen }) =>
        isChosen && 'linear-gradient(126.87deg, #635273 16.19%, #B9A1CF 83.65%)'};
    border-radius: ${({ isChosen }) => isChosen && '25px'};
    white-space: nowrap;

    &:not(:last-child) {
        margin-right: 8px;
    }
`
