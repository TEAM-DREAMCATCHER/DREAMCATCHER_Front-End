import { Footer, Checkbox } from './style'

export default function RecordFooter() {
    return (
        <Footer>
            <Checkbox>
                <label htmlFor="visibility">커뮤니티에 공개</label>
                <input type="checkbox" name="visibility" id="visibility" />
            </Checkbox>
        </Footer>
    )
}
