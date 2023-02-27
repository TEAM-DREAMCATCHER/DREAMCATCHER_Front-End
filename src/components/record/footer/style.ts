import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CheckIcon from '../../../../public/assets/icon/btn_check_active.png'

export const Footer = styled.footer`
    min-height: 55px;
    padding: 15px 0;
    ${({ theme }) => theme.layouts.flexBetween};
`

export const Date = styled.div`
    ${({ theme }) => theme.layouts.flexCenter};
    max-width: 50%;

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
    ${({ theme }) => theme.fonts.text12};
    cursor: pointer;
`

export const Checkbox = styled.div`
    min-width: 115px;
    ${({ theme }) => theme.layouts.flexCenter};

    label {
        ${({ theme }) => theme.fonts.text12};
        cursor: pointer;
    }

    input {
        appearance: none;
        width: 15px;
        height: 15px;
        margin-left: 6px;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: 0 0 5px 0.5px ${({ theme }) => theme.colors.white};
        border-radius: 3px;
        cursor: pointer;
    }

    input:checked {
        background: center / 15px 15px no-repeat url(${CheckIcon});
    }
`
