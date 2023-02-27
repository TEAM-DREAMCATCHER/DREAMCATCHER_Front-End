import { useNavigate } from 'react-router-dom'

import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import Calendar from '@/components/home/calendar'
import {
    Header,
    HomeLayout,
    Title,
    TitleBox,
    ListButton,
    DreamCotent,
    DreamContainer,
    AddButtonBox,
} from '@/pages/home/styles'
import yetDeveloped from '@/utils/yetDeveloped'
import Navbar from '@/components/common/navbar'
import AddButton from '@/components/common/AddButton'
import FowardIcon from '@/components/common/icons/FowardIcon'
import Dream from '@/components/home/Dream'

function Home() {
    const navigate = useNavigate()

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
                                <FowardIcon />
                            </ListButton>
                        </TitleBox>
                        <div>
                            <ul>
                                <DreamCotent>
                                    <Dream />
                                </DreamCotent>

                                <DreamCotent>
                                    <Dream />
                                </DreamCotent>

                                <DreamCotent>
                                    <Dream />
                                </DreamCotent>
                            </ul>
                        </div>
                    </DreamContainer>
                </main>
                <AddButtonBox>
                    <AddButton onClick={() => navigate('/recording')} />
                </AddButtonBox>

                <Navbar />
            </HomeLayout>
        </>
    )
}

export default Home
