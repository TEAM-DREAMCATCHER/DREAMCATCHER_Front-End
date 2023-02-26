import { useState } from 'react'
// import Calendar from 'react-calendar'
import { Footer, Date, Checkbox } from './style'

export default function RecordFooter() {
    const [isPublic, setIsPublic] = useState<boolean>(false)
    // const [date, setDate] = useState(new Date())

    return (
        <Footer>
            <Date>2023.02.26</Date>
            {/* <Calendar onChange={setDate} value={date} /> */}
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
