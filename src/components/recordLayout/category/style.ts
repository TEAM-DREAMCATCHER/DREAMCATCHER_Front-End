import styled from 'styled-components'

export const CategoryLayout = styled.div`
    background: #000;
`
export const CategoryList = styled.ul`
    display: flex;
    align-items: center;
    padding: 10px 22px;
    width: 500px;
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
        width: 100px;
        background: #635273;
        border-radius: 10px;
    }
    .scrollBar::-webkit-scrollbar-track {
        background-color: #635273;
    }
`
export const CategoryItem = styled.li<{ isChosen: Boolean }>`
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    text-shadow: #fff 1px 0 10px;
    background: ${({ isChosen }) =>
        isChosen && 'linear-gradient(126.87deg, #635273 16.19%, #B9A1CF 83.65%)'};
    border-radius: ${({ isChosen }) => isChosen && '25px'};
    white-space: nowrap;

    &:not(:last-child) {
        margin-right: 8px;
    }
`
