import styled from 'styled-components';


export const SortOptionLayout = styled.div`
    margin-top: 12px;
`
export const SortOptionList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 19px;
    padding: 3px 0;
    background: #1d1a23;
    border-radius: 20px;
`
export const SortOptionSpan = styled.span`
    width: 1.5px;
    height: 10px;
    margin: 0 6px;
    background: #0b0711;
`
export const SortOptionItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    background: #a3a3a3;
    background: linear-gradient(to bottom, #a3a3a3 0%, #3f3f3f 100%);
    -webkit-background-clip: text;
    color: transparent;
    
    & span {
        display: block;
        width: 4px;
        height: 4px;
        margin-right: 4px;
        color: #0b0711;
        border-radius: 50%;
        background: linear-gradient(to bottom, #a3a3a3 0%, #3f3f3f 100%);
    }
    
    &.active {
        color: #fff;

        & span {
            background: #fff;
        }
    }
`