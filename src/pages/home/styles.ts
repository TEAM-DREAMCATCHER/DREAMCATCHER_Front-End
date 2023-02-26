import styled from 'styled-components'

export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`
export const HomeLayout = styled(Layout)`
    padding: 95px 20px 80px;
`

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;

    color: rgba(238, 239, 243, 0.95);

    margin-bottom: 18px;
`

export const SubHeading = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    /* white */

    color: rgba(238, 239, 243, 0.95);
`
