import { ko } from 'date-fns/esm/locale'
import { Footer, Date, SDatePicker, Checkbox } from './style'
import CalendarIcon from '../../common/icons/CalendarIcon'
import type { RecordFooterProps } from '@/components/recordLayout/types'

export default function RecordFooter({ recordState, setRecordState }: RecordFooterProps) {
    return (
        <Footer>
            <Date>
                <label htmlFor="datepicker">
                    <CalendarIcon />
                </label>
                <SDatePicker
                    name="datepicker"
                    id="datepicker"
                    selected={recordState.date}
                    onChange={(date: Date) =>
                        setRecordState((prev) => ({ ...prev, createdAt: date }))
                    }
                    maxDate={new window.Date()}
                    locale={ko}
                    dateFormat="yyyy.MM.dd"
                    showPopperArrow={false}
                    popperPlacement="auto"
                    // renderCustomHeader={({ date }) => (
                    //     <div className="month-day">
                    //         {getYear(date)}.{getMonth(date) + 1}
                    //     </div>
                    // )}
                />
            </Date>
            <Checkbox>
                <label htmlFor="checkbox">커뮤니티에 공개</label>
                <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    checked={recordState.isPublic}
                    onChange={(e) => {
                        setRecordState((prev) => ({ ...prev, isPublic: e.target.checked }))
                    }}
                />
            </Checkbox>
        </Footer>
    )
}
