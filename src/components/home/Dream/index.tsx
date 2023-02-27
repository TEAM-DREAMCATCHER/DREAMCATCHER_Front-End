import React from 'react'
import styled from 'styled-components'
import Like from '@/components/common/Like'

const Dream = () => {
    return (
        <Container>
            <Content>
                이 글은 나의 꿈 기록입니다. 여기서 더 많은 내용이 있으면 이렇게 온점들로 요약됩니다.
            </Content>
            <StatusBox>
                <LikeBox>
                    <Like heart />
                    <LikeCount>1.2k</LikeCount>
                </LikeBox>
                <PostDate>2023년 2월 24일 </PostDate>
            </StatusBox>
        </Container>
    )
}

export default Dream

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 390px;
    height: 108px;
    padding: 22px;
    border-radius: 20px;
    background-color: #1d1a23;
`

const Content = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StatusBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const LikeBox = styled.div`
    display: flex;
    align-items: center;
`

const LikeCount = styled.span`
    margin-left: 20px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
`

const PostDate = styled.span`
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
`
