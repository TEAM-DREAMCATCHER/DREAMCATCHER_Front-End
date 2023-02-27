import HomeIcon from '../icons/HomeIcon'
import navMoonIcon from '../../../../public/assets/icon/navMoon.png'
import navMoonActiveIcon from '../../../../public/assets/icon/navMoon-active.png'

import { NavLink, useLocation } from 'react-router-dom'
import { Container } from '@/components/common/navbar/styles'

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
