import { useState } from 'react'
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
    // 추후 데이터 props 전달받아 작성해야함
    const nickName = '닉네임'
    const [content, setContent] = useState(
        '이 글은 다른 사람의 꿈기록입니다!!!!!내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
    )
    const [like, setLike] = useState('1.0k')
    const [time, setTime] = useState('6시간전')

    return (
        <>
            <PostingSection>
                <HeaderBox>
                    <div>
                        <BackButton> &lt; </BackButton>
                    </div>
                    <div>📢</div>
                </HeaderBox>
                <EmojiBox>{/* <Emoji unified={.emoji} size={50} /> */}😁</EmojiBox>
                <PostingBox>
                    <UserBox>
                        <ImgBox>이미지</ImgBox>
                        <IdBox>{nickName}</IdBox>
                    </UserBox>
                    <ContentBox>
                        <ContentParagraph>{content}</ContentParagraph>
                    </ContentBox>
                    <FooterBox>
                        <LikeBox>
                            ❤️ <label>{like}</label>
                        </LikeBox>
                        <TimeBox>
                            <p>{time}</p>
                        </TimeBox>
                    </FooterBox>
                </PostingBox>
            </PostingSection>
        </>
    )
}
