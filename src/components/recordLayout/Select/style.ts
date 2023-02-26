import styled from 'styled-components'

export const Container = styled.div`
    width: 20em;
    min-height: 1.5em;
    border: 0.05em solid #777;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.25em;
    outline: none;
    :focus {
        border-color: hsl(200, 100%, 50%);
    }
`
export const Value = styled.span`
    flex-grow: 1;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
`
export const ClearBtn = styled.button`
    background: none;
    color: #777;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25em;
    :focus,
    :hover {
        color: #333;
    }
`
export const Divider = styled.div`
    background-color: #777;
    align-self: stretch;
    width: 0.05em;
`
export const Caret = styled.div`
    translate: 0 25%;
    border: 0.25em solid transparent;
    border-top-color: #777;
`
export const OptionBadge = styled.button`
    display: flex;
    align-items: center;
    border: 0.05em solid #777;
    border-radius: 0.25em;
    padding: 0.15em 0.25em;
    gap: 0.25em;
    cursor: pointer;
    background: none;
    outline: none;
    :hover,
    :focus {
        background-color: hsl(0, 100%, 90%);
        border-color: hsl(0, 100%, 50%);
    }
    > RemoveBtn {
        font-size: 1.25em;
        color: #777;
    }
    :hover > RemoveBtn,
    :focus > RemoveBtn {
        color: hsl(0, 100%, 50%);
    }
`
export const RemoveBtn = styled.span``
export const Options = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    max-height: 15em;
    overflow-y: auto;
    border: 0.05em solid #777;
    border-radius: 0.25em;
    width: 300px;
    top: calc(100% + 0.25em);
    background-color: #b9a1cf;
    z-index: 100;
`
export const Option = styled.li<{ isOptionSelectedValue: boolean; isHighLighted: boolean }>`
    padding: 0.25em 0.5em;
    cursor: pointer;
    background-color: ${({ isOptionSelectedValue }) =>
        isOptionSelectedValue && 'hsl(200, 100%, 70%)'};
    background-color: ${({ isHighLighted }) => isHighLighted && 'hsl(200, 100%, 50%)'};
    color: ${({ isHighLighted }) => isHighLighted && 'white'};
`
