import { useState } from 'react'
import { ko } from 'date-fns/esm/locale'
import { Footer, Date, SDatePicker, Checkbox } from './style'

export default function RecordFooter() {
    const [isPublic, setIsPublic] = useState<boolean>(false)
    const [date, setDate] = useState<Date>(new window.Date())

    return (
        <Footer>
            <Date>
                <label htmlFor="datepicker" />
                <SDatePicker
                    name="datepicker"
                    id="datepicker"
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                    locale={ko}
                    dateFormat="yyyy.MM.dd"
                    showPopperArrow={false}
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
