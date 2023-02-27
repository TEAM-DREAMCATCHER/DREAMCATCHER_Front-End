import HomeIcon from '../icons/HomeIcon'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Container, NavBox, Wrapper } from '@/components/common/navbar/styles'
import HomeNotIcon from '@/components/common/icons/HomeNotIcon'
import AddButton from '@/components/common/AddButton'

const Navbar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return (
        <Container>
            <Wrapper>
                <AddButton onClick={() => navigate('/recording')} />
            </Wrapper>
            <NavBox>
                <nav>
                    <NavLink to="/home">
                        {pathname === '/home' ? <HomeIcon /> : <HomeNotIcon />}
                    </NavLink>
                </nav>
                <nav>
                    <NavLink to="/community">
                        {pathname === '/community' ? (
                            <img src="/assets/icon/navMoon-active.png" alt="" />
                        ) : (
                            <img
                                src="/assets/icon/moon-not.png"
                                alt="moon"
                                width={26}
                                height={26}
                            />
                        )}
                    </NavLink>
                </nav>
            </NavBox>
        </Container>
    )
}

export default Navbar
