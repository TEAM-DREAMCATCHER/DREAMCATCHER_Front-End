import LikeIcon from '@/icons/Like-Icon'
import ProfileIcon from '@/icons/profile-Icon'
import {
    ContentParagraph,
    FooterBox,
    HeaderBox,
    ProfileEmoji,
    IdParagraph,
    PostingItem,
    ProfileBox,
    LikeCount,
    TimeParagraph,
} from './style'

export default function Posting() {
    const mock = {
        id: 4,
        userId: 'user',
        content: 'dream dream',
        createdAt: '2023-02-26',
        updatedAt: '2023-02-26',
        likeCount: 0,
        category: 'joy',
        pri: false,
        emoji: 'joy',
    }

    const loginUser = 'user'

    return (
        <>
            <PostingItem>
                <HeaderBox>
                    <ProfileBox>
                        <ProfileIcon />
                        <IdParagraph>{mock.userId}</IdParagraph>
                    </ProfileBox>
                    <ProfileEmoji>{mock.userId === loginUser ? '📖' : ''}</ProfileEmoji>
                </HeaderBox>
                <ContentParagraph>{mock.content}</ContentParagraph>
                <FooterBox>
                    <LikeIcon />
                    <LikeCount>{mock.likeCount}</LikeCount>

                    <TimeParagraph>{mock.createdAt}</TimeParagraph>
                </FooterBox>
            </PostingItem>
        </>
    )
}
