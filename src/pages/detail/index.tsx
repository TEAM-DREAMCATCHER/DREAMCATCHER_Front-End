import BackIcon from '@/components/common/icons/BackIcon'
import ProfileIcon from '@/components/common/icons/ProfileIcon'
import { Emoji } from 'emoji-picker-react'
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
    LikeButton,
    ManageBox,
    ManageButton,
    PostingBox,
    PostingSection,
    ShareButton,
    TimeBox,
    UserBox,
    UserInfoBox,
} from './styles'

export default function Detail() {
    const loginUser = 'user'

    const location = useLocation()
    const { id, userId, content, createdAt, likeCount, pri, emoji } = location.state
    const shareHandler = () => {
        if (navigator.share) {
            navigator.share({
                title: '기록해드림의 꿈기록',
                text: 'content',
                url: `http://localhost:5173/Community/${id}`,
            })
        } else {
            alert('공유하기가 지원되지 않는 환경입니다.')
        }
    }

    const modifyHandler = () => {
        alert('준비중입니다.')
    }

    const deleteHandler = () => {
        alert('준비중입니다.')
    }

    return (
        <>
            <Layout>
                <PostingSection>
                    <HeaderBox>
                        <div>
                            <BackButton to="/community">
                                <BackIcon />
                            </BackButton>
                        </div>
                        <div>
                            <ShareButton onClick={() => shareHandler()}>📢</ShareButton>
                        </div>
                    </HeaderBox>
                    <EmojiBox>
                        <Emoji unified={emoji} size={50} />
                    </EmojiBox>
                    <PostingBox>
                        <UserBox>
                            <UserInfoBox>
                                <ImgBox>{<ProfileIcon />}</ImgBox>
                                <IdBox>{userId}</IdBox>
                            </UserInfoBox>
                            {userId === loginUser ? (
                                <ManageBox>
                                    <ManageButton onClick={() => modifyHandler()}>
                                        수정
                                    </ManageButton>
                                    <ManageButton onClick={() => deleteHandler()}>
                                        삭제
                                    </ManageButton>
                                </ManageBox>
                            ) : (
                                ''
                            )}
                        </UserBox>

                        <ContentBox>
                            <ContentParagraph>{content}</ContentParagraph>
                        </ContentBox>
                        <FooterBox>
                            <LikeBox>
                                <LikeButton>❤️</LikeButton>
                                <label>{likeCount}</label>
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
