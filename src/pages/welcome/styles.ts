import styled from 'styled-components'

export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`

export const WelcomeLayout = styled(Layout)`
    padding: 85px 20px 51px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #ffffff;
`

export const Button = styled.button`
    width: 100%;
    height: 58px;

    background: linear-gradient(126.87deg, #b9a1cf 16.19%, #635273 83.65%);
    border-radius: 29px;

    font-weight: 600;
    font-size: 18px;
    color: #000000;
`
