import {
    ContentParagraph,
    FooterBox,
    HeaderBox,
    ProfileImg,
    ProfileEmoji,
    IdParagraph,
    PostingItem,
    ProfileBox,
    LikeIcon,
    LikeCount,
    TimeParagraph,
} from './style'

export default function Posting() {
    return (
        <>
            <PostingItem>
                <HeaderBox>
                    <ProfileBox>
                        <ProfileImg>
                            <img src="" alt="프로필 이미지" />
                        </ProfileImg>
                        <IdParagraph>닉네임</IdParagraph>
                    </ProfileBox>
                    <ProfileEmoji>📖</ProfileEmoji>
                </HeaderBox>
                <ContentParagraph>
                    꿈내용 블라블라~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </ContentParagraph>
                <FooterBox>
                    <LikeIcon>
                        <img src="" alt="좋아요 아이콘"/>
                    </LikeIcon>
                    <LikeCount>1.2k</LikeCount>
                    <TimeParagraph>6시간 전</TimeParagraph>
                </FooterBox>
            </PostingItem>
        </>
    )
}
