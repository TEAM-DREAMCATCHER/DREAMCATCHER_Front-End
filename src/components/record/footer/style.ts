import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import calendarIcn from '../../../assets/icn_calendar.png'
import checkActiveBtn from '../../../assets/btn_check_active.png'

export const Footer = styled.footer`
    min-height: 55px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Date = styled.div`
    display: flex;
    align-items: center;

    label {
        width: 24px;
        height: 22px;
        margin-right: 2px;
        background: center / 100% no-repeat url(${calendarIcn});
        cursor: pointer;
    }
`

export const SDatePicker = styled(DatePicker)`
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;
    vertical-align: top;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
`

export const Checkbox = styled.div`
    display: flex;
    align-items: center;

    label {
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 12px;
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
