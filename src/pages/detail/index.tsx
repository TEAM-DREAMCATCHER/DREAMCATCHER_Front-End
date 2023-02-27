import ProfileIcon from '@/components/common/icons/ProfileIcon'
import { useLocation } from 'react-router-dom'
import {
    BackButton,
    ContentBox,
    ContentParagraph,
    EmojiBox,
    FooterBox,
    HeaderBox,
    IdBox,
    ImgBox,
    Layout,
    LikeBox,
    PostingBox,
    PostingSection,
    TimeBox,
    UserBox,
} from './styles'

export default function Detail() {
    const location = useLocation()
    const { userId, content, createdAt, likeCount, pri } = location.state

    return (
        <>
            <Layout>
                <PostingSection>
                    <HeaderBox>
                        <div>
                            <BackButton to="/community"> &lt; </BackButton>
                        </div>
                        <div>📢</div>
                    </HeaderBox>
                    <EmojiBox>{/* <Emoji unified={.emoji} size={50} /> */}😁</EmojiBox>
                    <PostingBox>
                        <UserBox>
                            <ImgBox>{<ProfileIcon />}</ImgBox>
                            <IdBox>{userId}</IdBox>
                        </UserBox>
                        <ContentBox>
                            <ContentParagraph>{content}</ContentParagraph>
                        </ContentBox>
                        <FooterBox>
                            <LikeBox>
                                ❤️ <label>{likeCount}</label>
                            </LikeBox>
                            <TimeBox>
                                <p>{createdAt}</p>
                            </TimeBox>
                        </FooterBox>
                    </PostingBox>
                </PostingSection>
            </Layout>
        </>
    )
}
