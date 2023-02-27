import { useState } from 'react'
import { ko } from 'date-fns/esm/locale'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import { Footer, Date, SDatePicker, Checkbox } from './style'
import CalendarIcon from '../../common/icons/CalendarIcon'

export default function RecordFooter() {
    const [isPublic, setIsPublic] = useState<boolean>(false)
    const [date, setDate] = useState<Date>(new window.Date())

    return (
        <Footer>
            <Date>
                <label htmlFor="datepicker">
                    <CalendarIcon />
                </label>
                <SDatePicker
                    name="datepicker"
                    id="datepicker"
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                    maxDate={new window.Date()}
                    locale={ko}
                    dateFormat="yyyy.MM.dd"
                    showPopperArrow={false}
                    popperPlacement="auto"
                    renderCustomHeader={({ date }) => (
                        <div className="month-day">
                            {getYear(date)}.{getMonth(date) + 1}
                        </div>
                    )}
                />
            </Date>
            <Checkbox>
                <label htmlFor="checkbox">커뮤니티에 공개</label>
                <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    checked={isPublic}
                    onChange={(e) => {
                        setIsPublic(e.target.checked)
                    }}
                />
            </Checkbox>
        </Footer>
    )
}
