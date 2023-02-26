import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import Calendar from '@/components/home/calendar'
import { Header, Heading, HomeLayout, SubHeading } from '@/pages/home/styles'
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
            <Heading>오지님,</Heading>
            <SubHeading>2023년 2월 한달 간</SubHeading>
            <SubHeading>알록달록한 꿈을 꾸셨네요!</SubHeading>
            <Calendar />
        </HomeLayout>
    )
}

export default Home
