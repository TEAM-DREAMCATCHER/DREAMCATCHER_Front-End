import styled from 'styled-components'

export const Header = styled.header`
    height: 58px;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    padding: 24px 20px 34px;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Heading = styled.h1`
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    width: 100%;
    height: 58px;

    background: linear-gradient(126.87deg, #b9a1cf 16.19%, #635273 83.65%);
    border-radius: 29px;

    font-weight: 600;
    font-size: 18px;
    color: #000000;

    &:disabled {
        opacity: 0.5;
    }
`
