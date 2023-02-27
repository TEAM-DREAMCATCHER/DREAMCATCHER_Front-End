import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 430px;
    width: 100%;
`

export const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 95px;
    flex: 1;
    height: 80px;
    background: linear-gradient(180deg, #0b0711 0%, rgba(11, 7, 17, 0.9) 100%);
    border-radius: 30px 30px 0px 0px;
    margin: auto;

    nav {
        cursor: pointer;
    }
`

export const Wrapper = styled.div`
    width: fit-content;
    position: fixed;
    z-index: 10;
    bottom: 55px;

    margin: auto;
    left: 0;
    right: 0;
`
