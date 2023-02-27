import { Emoji } from 'emoji-picker-react'
import { ShineBox } from '@/components/home/calendar/styles'

interface CalendarItemProps {
    emoji: string
}

function CalendarItem({ emoji }: CalendarItemProps) {
    return (
        <ShineBox>
            <Emoji unified={emoji} size={24} />
        </ShineBox>
    )
}

export default CalendarItem
