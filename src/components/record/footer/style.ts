import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const Footer = styled.footer`
    min-height: 55px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 700px;
`

export const Date = styled.div`
    display: flex;
    align-items: center;

    label {
        width: 24px;
        height: 22px;
        margin-right: 2px;
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
`
