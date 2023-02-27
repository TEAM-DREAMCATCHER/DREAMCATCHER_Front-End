import { useNavigate } from 'react-router-dom'
import Calendar from '@/components/home/calendar'
import {
    HomeLayout,
    Title,
    TitleBox,
    ListButton,
    DreamContent,
    DreamContainer,
    AddButtonBox,
    Header,
} from '@/pages/home/styles'
import Navbar from '@/components/common/navbar'
import AddButton from '@/components/common/AddButton'
import ForwardIcon from '@/components/common/icons/ForwardIcon'
import Dream from '@/components/home/Dream'
import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import yetDeveloped from '@/utils/yetDeveloped'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentDreamsAPI } from '@/apis/home'

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        getCurrentDreamsAPI()
    }, [])

    return (
        <>
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
                    <DreamContainer>
                        <TitleBox>
                            <Title>나의 꿈 Top 3</Title>
                            <ListButton onClick={() => navigate('/list')}>
                                <span>전체보기</span>
                                <ForwardIcon />
                            </ListButton>
                        </TitleBox>
                        <div>
                            <ul>
                                <DreamContent>
                                    <Dream />
                                </DreamContent>

                                <DreamContent>
                                    <Dream />
                                </DreamContent>

                                <DreamContent>
                                    <Dream />
                                </DreamContent>
                            </ul>
                        </div>
                    </DreamContainer>
                </main>

                {/* NOTE: NAV랑 이게 나눠져 있는게 맞을까요..? */}
                <AddButtonBox>
                    <AddButton onClick={() => navigate('/recording')} />
                </AddButtonBox>

                <Navbar />
            </HomeLayout>
        </>
    )
}

export default Home
