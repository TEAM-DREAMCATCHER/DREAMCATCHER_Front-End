import { EmojiType, getPostEmojisAPI } from '@/apis/home'
import CalendarItem from '@/components/home/calendar/item'
import { CalendarLayout } from '@/components/home/calendar/styles'
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

    return (
        <CalendarLayout>
            {emojiList.map(({ emoji, id }) => (
                <CalendarItem key={id} emoji={emoji} />
            ))}
        </CalendarLayout>
    )
}

export default Calendar
