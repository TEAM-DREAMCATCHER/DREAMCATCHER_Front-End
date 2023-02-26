import { EmojiType, getPostEmojisAPI } from '@/apis/home'
import EmptyIcon from '@/components/home/calendar/EmptyIcon'
import CalendarItem from '@/components/home/calendar/item'
import { CalendarLayout, EmptyBox, Heading, SubHeading } from '@/components/home/calendar/styles'
import { useEffect, useState } from 'react'

function Calendar() {
    const [emojiList, setEmojiList] = useState<EmojiType[]>([])

    const getPostEmojis = async () => {
        const date = new Date()

        const response = await getPostEmojisAPI(date.getFullYear(), date.getMonth())
        setEmojiList(response)
    }

    useEffect(() => {
        getPostEmojis()
    }, [])

    if (emojiList.length === 0) {
        return (
            <>
                <Heading>오지님,</Heading>
                <SubHeading>이번 달 꿈 기록이 없어요!</SubHeading>
                <CalendarLayout>
                    <EmptyBox>
                        <EmptyIcon />
                        <p>꿈 일기를 작성하여</p>
                        <p> 나만의 드림 스탬프를 등록해보세요</p>
                    </EmptyBox>
                </CalendarLayout>
            </>
        )
    }
    return (
        <>
            <Heading>오지님,</Heading>
            <SubHeading>2023년 2월 한달 간</SubHeading>
            <SubHeading>알록달록한 꿈을 꾸셨네요!</SubHeading>{' '}
            <CalendarLayout>
                {emojiList.map(({ emoji, id }) => (
                    <CalendarItem key={id} emoji={emoji} />
                ))}
            </CalendarLayout>
        </>
    )
}

export default Calendar
