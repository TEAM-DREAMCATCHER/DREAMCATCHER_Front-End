import { CalendarLayout, CalendarTop } from '@/components/home/calendar/styles'
import CalendarIcon from '@/icons/calendar-icon'

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
