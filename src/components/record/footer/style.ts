import styled from 'styled-components'
import checkActiveBtn from '../../../assets/btn_check_active.png'

export const Footer = styled.footer`
    min-height: 55px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Checkbox = styled.div`
    display: flex;
    align-items: center;

    label {
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
    }

    input {
        appearance: none;
        width: 15px;
        height: 15px;
        margin-left: 6px;
        background-color: rgba(238, 239, 243, 0.95);
        box-shadow: 0 0 5px 0.5px rgba(238, 239, 243, 0.95);
        border-radius: 3px;
    }

    input:checked {
        background: center / 15px 15px no-repeat url(${checkActiveBtn});
    }
`
