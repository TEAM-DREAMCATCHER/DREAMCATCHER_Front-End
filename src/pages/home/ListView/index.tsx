import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Layout } from '@/components/common/styles/layout'
import Posting from '@/components/common/posting'
import BackIcon from '@/components/common/icons/BackIcon'
import CalendarIcon from '@/components/common/icons/CalendarIcon'
import AddButton from '@/components/common/AddButton'

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
                <button onClick={() => navigate(-1)}>
                    <BackIcon />
                </button>
                <CalendarIcon />
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

const HomeLayout = styled(Layout)`
    display: flex;
    flex-direction: column;

    padding: 0 20px 80px;
`

const Header = styled.header`
    height: 70px;
    gap: 12px;

    ${({ theme }) => theme.layouts.flexBetween}
`

const Title = styled.h3`
    margin-bottom: 31px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.gray2};
`

const PostList = styled.ul`
    height: 100vh;
    overflow-y: scroll;
`

const AddButtonContainer = styled.div`
    position: fixed;
    bottom: 25px;
    align-self: center;
`
