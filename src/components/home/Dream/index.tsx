import Like from '@/components/common/Like'
import { LikeCount } from '@/components/common/posting/style'
import { Container, Content, StatusBox, PostDate } from '@/components/home/Dream/styles'
import { LikeBox } from '@/pages/detail/styles'

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
