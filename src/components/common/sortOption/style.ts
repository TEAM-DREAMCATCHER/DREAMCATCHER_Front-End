import styled from 'styled-components';

interface SortOption {
    key: number
    idx: number
    active: number
}

export const SortOptionLayout = styled.div`
    margin-top: 12px;
`
export const SortOptionList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 19px;
    margin: 0 auto;
    padding: 3px 0;
    background: #1d1a23;
    border-radius: 20px;
`
export const SortOptionItem = styled.li<SortOption>`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to bottom, #a3a3a3 0%, #3f3f3f 100%);
    -webkit-background-clip: text;
    color: transparent;

    &:first-child::after {
        content: '';
        width: 1.5px;
        height: 10px;
        margin: 0 6px;
        background: #0b0711;
    }

    &::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        margin-right: 4px;
        border-radius: 50%;
    }

    ${(props) => {
        return props.idx == props.active
            ? `
                &::before {
                    color: #fff;
                    background: #fff;
                }
                
                color: #fff;
                
            `
            : `
                background: linear-gradient(to bottom, #a3a3a3 0%, #3f3f3f 100%); 
                color: transparent; 
                -webkit-background-clip: text; 
                
                &::before {
                    color: #0b0711;
                    background: linear-gradient(to bottom, #a3a3a3 0%, #3f3f3f 100%);
                }
            `
    }}
`