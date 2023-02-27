import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import Calendar from '@/components/home/calendar'
import { Header, HomeLayout } from '@/pages/home/styles'
import yetDeveloped from '@/utils/yetDeveloped'
import Navbar from '@/components/common/navbar'
import AddButton from '@/components/common/AddButton'
import FowardIcon from '@/components/common/icons/FowardIcon'
import Dream from '@/components/home/Dream'

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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
                    <div>
                        <TitleBox>
                            <Title>나의 꿈 Top 3</Title>
                            <ListButton>
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
                    </div>
                </main>
                <AddButtonBox>
                    <AddButton onClick={() => navigate('/recording')} />
                </AddButtonBox>
            </HomeLayout>
            <Navbar />
        </>
    )
}

export default Home

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
`

const ListButton = styled.button`
    display: flex;
    align-items: center;
    color: #9e9e9e;
`

const DreamCotent = styled.li`
    margin-top: 16px;
`

const AddButtonBox = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 55px;
    align-self: center;
`
