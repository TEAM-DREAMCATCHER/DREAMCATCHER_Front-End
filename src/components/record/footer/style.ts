import styled from 'styled-components'
import calendarIcn from '../../../assets/icn_calendar.png'
import checkActiveBtn from '../../../assets/btn_check_active.png'

export const Footer = styled.footer`
    min-height: 55px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Date = styled.p`
    display: flex;
    align-items: center;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    &::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 22px;
        margin-right: 2px;
        background: center / 100% no-repeat url(${calendarIcn});
    }
`

export const Checkbox = styled.div`
    display: flex;
    align-items: center;

    label {
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
    }

    input {
        appearance: none;
        width: 15px;
        height: 15px;
        margin-left: 6px;
        background-color: rgba(238, 239, 243, 0.95);
        box-shadow: 0 0 5px 0.5px rgba(238, 239, 243, 0.95);
        border-radius: 3px;
        cursor: pointer;
    }

    input:checked {
        background: center / 15px 15px no-repeat url(${checkActiveBtn});
    }
`
