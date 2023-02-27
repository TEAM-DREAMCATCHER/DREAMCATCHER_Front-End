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
        userId: '헨리',
        likeCount: 2400,
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
        emoji: '1f601',
    },
    {
        postId: '1234123414',
        userId: '헨리',
        likeCount: 2400,
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
        emoji: '1f601',
    },
    {
        postId: '1234123414',
        userId: '헨리',
        likeCount: 2400,
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
        emoji: '1f601',
    },
    {
        postId: '1234123414',
        userId: '헨리',
        likeCount: 2400,
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
        emoji: '1f601',
    },
    {
        postId: '1234123414',
        userId: '헨리',
        likeCount: 2400,
        content: '내용란입니다!!',
        createdAt: '2023-02-27 15:23:33',
        emoji: '1f601',
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
                                    userId={post.userId}
                                    likeCount={post.likeCount}
                                    createdAt={post.createdAt}
                                    emoji={post.emoji}
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
