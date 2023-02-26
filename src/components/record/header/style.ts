import styled from 'styled-components'

export const Header = styled.header`
    min-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CloseButton = styled.button.attrs({
    alt: '창 닫기',
})`
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-left: -14px;
`

export const SaveButton = styled.button.attrs({
    alt: '저장하기',
})`
    width: 28px;
    height: 29px;
    cursor: pointer;
`
