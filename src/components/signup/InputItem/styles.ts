import styled from 'styled-components'

export const InputItemBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    text-align: left;
`

export const InputErrorMsg = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #e03223;

    margin: 8px 24px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background: #1b1b29;
    border: 1px solid #1b1b29;
    border-radius: 20px;
    padding: 18px 22px;
    color: #ffffff;
    height: 58px;

    font-size: 19px;
    &::placeholder {
        opacity: 0.5;
    }
`
export const IconBox = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 17px;
    margin: auto;
    height: fit-content;
`
