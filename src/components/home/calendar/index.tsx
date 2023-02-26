import CalendarIcon from '@/components/common/icons/CalendarIcon'
import { CalendarLayout, CalendarTop } from '@/components/home/calendar/styles'

function Calendar() {
    return (
        <CalendarLayout>
            <CalendarTop>
                <span>2023년 2월</span>
                <CalendarIcon />
            </CalendarTop>
        </CalendarLayout>
    )
}

export default Calendar
