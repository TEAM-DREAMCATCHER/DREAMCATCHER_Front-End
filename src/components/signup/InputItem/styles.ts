import styled from 'styled-components'

export const InputItemBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    text-align: left;
`

export const InputErrorMsg = styled.p`
    ${({ theme }) => theme.fonts.text14};

    color: #e03223;
    line-height: 20px;

    margin: 8px 24px;
`

export const Input = styled.input`
    ${({ theme }) => theme.fonts.title18};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.navy};

    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 18px 22px;
    height: 58px;

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
