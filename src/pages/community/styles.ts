import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DetailButton = styled(Link)``

export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`
export const MoreBox = styled.div`
    text-align: center;
`

export const MoreButton = styled.button`
    width: 100px;
    height: 40px;
    color: white;
    background-color: gray;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        opacity: 70%;
    }
`
