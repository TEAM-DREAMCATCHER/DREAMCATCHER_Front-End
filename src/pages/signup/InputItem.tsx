import { Wrapper } from '@/pages/signup/styles'

function InputItem() {
    return (
        <InputItem>
            <input
                type="text"
                name="email"
                onChange={handleInputChange}
                value={email}
                placeholder="아이디 입력"
            />
            <CheckIcon />
        </InputItem>
    )
}
export default InputItem
