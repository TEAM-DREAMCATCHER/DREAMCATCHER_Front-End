import { getCurrentDreamsAPI, getMyDreamsAPI } from '@/apis/home'
import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import Calendar from '@/components/home/calendar'
import { Header, HomeLayout } from '@/pages/home/styles'
import yetDeveloped from '@/utils/yetDeveloped'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    // useEffect(() => {
    //     // getCurrentDreamsAPI()
    //     getMyDreamsAPI()
    // }, [])

    return (
        <HomeLayout>
            <Header>
                {/* TODO: 임시 community ,recording연결 */}
                {/* <span onClick={yetDeveloped}> */}
                <Link to="/recording">
                    <AlertIcon />
                </Link>
                {/* </span> */}
                {/* <span onClick={yetDeveloped}> */}
                <Link to="/community">
                    <MenuIcon />
                </Link>
                {/* </span> */}
            </Header>
            <main>
                <Calendar />
            </main>
        </HomeLayout>
    )
}

export default Home
