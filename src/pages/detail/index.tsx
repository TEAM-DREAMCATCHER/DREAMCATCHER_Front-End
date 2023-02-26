import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileImage from './Profile'
import {
    BackButton,
    ContentBox,
    ContentParagraph,
    EmojiBox,
    FooterBox,
    HeaderBox,
    IdBox,
    ImgBox,
    LikeBox,
    PostingBox,
    PostingSection,
    TimeBox,
    UserBox,
} from './style'

export default function Detail() {
    const location = useLocation()
    const { userId, content, createdAt, likeCount, pri } = location.state

    return (
        <>
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
                        <ImgBox>{<ProfileImage />}</ImgBox>
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
        </>
    )
}
