import LikeIcon from '@/components/common/Like'
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

interface PostingProps {
    nickName: string
    content: string
    emoji: string
    likeCount: number
    createdAt: string
}

export default function Posting({
    nickName,
    content,
    emoji,
    likeCount,
    createdAt,
}: PostingProps): React.ReactElement {
    const loginUser = 'user'

    const convertLikeCountToK = (count: number) => {
        const thousand = 1000
        const million = 10000

        if (count >= thousand && count < million) {
            return count / thousand + 'K'
        }
        return count
    }

    return (
        <>
            <PostingItem>
                <HeaderBox>
                    <ProfileBox>
                        <ProfileIcon />
                        <IdParagraph>{nickName}</IdParagraph>
                    </ProfileBox>
                    <ProfileEmoji>{emoji}</ProfileEmoji>
                </HeaderBox>
                <ContentParagraph>{content}</ContentParagraph>
                <FooterBox>
                    <LikeIcon />
                    <LikeCount>{convertLikeCountToK(likeCount)}</LikeCount>

                    <TimeParagraph>{createdAt}</TimeParagraph>
                </FooterBox>
            </PostingItem>
        </>
    )
}
