import LikeIcon from '@/components/common/Like'
import ProfileIcon from '@/components/common/icons/ProfileIcon'
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
import { Emoji } from 'emoji-picker-react'

interface PostingProps {
    userId: string
    content: string
    emoji: string
    likeCount: number
    createdAt: string
}

export default function Posting({
    userId,
    content,
    emoji,
    likeCount,
    createdAt,
}: PostingProps): React.ReactElement {
    const loginUser = 'user'
    const [date, time] = [createdAt.slice(0, 10), createdAt.slice(11)]
    const [year, month, day] = date.split('-').map(Number)
    const [hour, min, seconds] = time.split(':').map(Number)
    const nowTime = new Date()
    const [nowYear, nowMonth, nowDay, nowHour, nowMin, nowSeconds] = [
        nowTime.getFullYear(),
        nowTime.getMonth(),
        nowTime.getDate(),
        nowTime.getHours(),
        nowTime.getHours(),
        nowTime.getMinutes(),
    ]

    if (year === nowYear && month === nowMonth && day === nowDay) {
    }

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
                        <IdParagraph>{userId}</IdParagraph>
                    </ProfileBox>
                    <ProfileEmoji>
                        <Emoji unified={emoji} size={20} />
                    </ProfileEmoji>
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
