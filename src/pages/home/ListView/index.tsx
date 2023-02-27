import { Link, useNavigate } from 'react-router-dom'
import Posting from '@/components/common/posting'
import BackIcon from '@/components/common/icons/BackIcon'
import CalendarIcon from '@/components/common/icons/CalendarIcon'
import AddButton from '@/components/common/AddButton'
import yetDeveloped from '@/utils/yetDeveloped'
import {
    GobackButton,
    PostList,
    AddButtonContainer,
    HomeLayout,
    Header,
    Title,
} from '@/pages/home/ListView/styles'

const mockData = [
    {
        postId: '1234123414',
        userId: '230989234234asdf1',
        nickname: '헨리',
        emoji: '💕',
        like: {
            count: 2400,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '123412341423',
        userId: '230989234234asdf2',
        nickname: '감자',
        emoji: '💕',
        like: {
            count: 1200,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '123412341423',
        userId: '230989234234asdf3',
        nickname: '라라',
        emoji: '💕',
        like: {
            count: 300,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '123412341422344',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '12341234142555',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '12341234142666',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '12341234142777',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '12341234142888',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
    {
        postId: '12341234142000',
        userId: '230989234234asdf4',
        nickname: '조이',
        emoji: '💕',
        like: {
            count: 60,
        },
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
    },
]

const ListView = () => {
    const navigate = useNavigate()

    return (
        <HomeLayout>
            <Header>
                <GobackButton onClick={() => navigate('/home')}>
                    <BackIcon />
                </GobackButton>
                <span onClick={yetDeveloped}>
                    <CalendarIcon />
                </span>
            </Header>
            <main>
                <Title>2023년 2월</Title>

                <PostList>
                    {mockData.map((post) => {
                        return (
                            <Link to={`community/${post.postId} `}>
                                <Posting
                                    key={post.userId}
                                    content={post.content}
                                    nickName={post.nickname}
                                    emoji={post.emoji}
                                    likeCount={post.like.count}
                                    createdAt={post.createdAt}
                                />
                            </Link>
                        )
                    })}
                </PostList>
            </main>
            <AddButtonContainer>
                <AddButton />
            </AddButtonContainer>
        </HomeLayout>
    )
}

export default ListView
