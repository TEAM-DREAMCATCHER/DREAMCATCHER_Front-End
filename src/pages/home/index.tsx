import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import Calendar from '@/components/home/calendar'
import { Header, HomeLayout } from '@/pages/home/styles'
import yetDeveloped from '@/utils/yetDeveloped'

function Home() {
    return (
        <HomeLayout>
            <Header>
                <span onClick={yetDeveloped}>
                    <AlertIcon />
                </span>
                <span onClick={yetDeveloped}>
                    <MenuIcon />
                </span>
            </Header>
            <main>
                <Calendar />
            </main>
        </HomeLayout>
    )
}

export default Home
