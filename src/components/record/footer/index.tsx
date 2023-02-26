import { useState } from 'react'
import { Footer, Date, Checkbox } from './style'

export default function RecordFooter() {
    const [isPublic, setIsPublic] = useState<boolean>(false)

    return (
        <Footer>
            <Date>2023.02.26</Date>
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