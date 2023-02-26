import { ShineBox } from '@/components/home/calendar/styles'
import { Emoji } from 'emoji-picker-react'

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
