import React from 'react'
import styled from 'styled-components'
import HomeIcon from '../icons/HomeIcon'
import navMoonIcon from '../../../../public/assets/icon/navMoon.png'
import navMoonActiveIcon from '../../../../public/assets/icon/navMoon-active.png'

import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation()

    return (
        <Container>
            <nav>
                <NavLink to="/home">{pathname === '/home' ? <HomeIcon /> : <HomeIcon />}</NavLink>
            </nav>

            <nav>
                <NavLink to="/community">
                    {pathname === '/community' ? (
                        <img src={navMoonActiveIcon} alt="" />
                    ) : (
                        <img src={navMoonIcon} alt="" />
                    )}
                </NavLink>
            </nav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 95px;
    max-width: 430px;
    width: 100%;
    height: 80px;
    background: linear-gradient(180deg, #0b0711 0%, rgba(11, 7, 17, 0.9) 100%);
    border-radius: 30px 30px 0px 0px;
`
