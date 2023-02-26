import styled from 'styled-components'

export const CategoryLayout = styled.div`
    background: #000;
`
export const CategoryList = styled.ul`
    display: flex;
    align-items: center;
    padding: 10px 22px;
`
export const CategoryItem = styled.li`
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    text-shadow: #fff 1px 0 10px;
    
    &.active {
        background: linear-gradient(126.87deg, #b9a1cf 16.19%, #635273 83.65%);
        border-radius: 25px;
    }

    &:not(:last-child) {
        margin-right: 7px;
    }
`
