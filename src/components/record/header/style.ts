import styled from 'styled-components'
import icnClose from '../../../assets/icn_close.png'
import icnSave from '../../../assets/icn_save.png'

export const Header = styled.header`
    min-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CloseButton = styled.img.attrs({
    src: icnClose,
    alt: '창 닫기',
})`
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-left: -8px;
`

export const SaveButton = styled.img.attrs({
    src: icnSave,
    alt: '저장하기',
})`
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin-right: -5px;
`
