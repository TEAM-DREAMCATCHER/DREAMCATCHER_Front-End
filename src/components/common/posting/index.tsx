import LikeIcon from '@/components/common/icons/LikeIcon'
import ProfileIcon from '@/components/common/icons/ProfileIcon'
import { Info } from '@/pages/community/community'
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

type InfoTypes = {
    props: Info
}

export default function Posting({ props }: InfoTypes): React.ReactElement {
    const loginUser = 'user'

    return (
        <>
            <PostingItem>
                <HeaderBox>
                    <ProfileBox>
                        <ProfileIcon />
                        <IdParagraph>{props.userId}</IdParagraph>
                    </ProfileBox>
                    <ProfileEmoji>{props.userId === loginUser ? '📖' : ''}</ProfileEmoji>
                </HeaderBox>
                <ContentParagraph>{props.content}</ContentParagraph>
                <FooterBox>
                    <LikeIcon />
                    <LikeCount>{props.likeCount}</LikeCount>

                    <TimeParagraph>{props.createdAt}</TimeParagraph>
                </FooterBox>
            </PostingItem>
        </>
    )
}
