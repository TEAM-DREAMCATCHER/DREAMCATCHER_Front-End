import InputItem from '@/components/signup/InputItem'
import { SigninLayout } from '@/pages/signin/styles'
import useInput from '@/pages/signup/useInput'

function Signin() {
    const [id, handleIdChange] = useInput()
    const [password, handlePasswordChange] = useInput()

    return (
        <SigninLayout>
            <InputItem
                type="text"
                name="id"
                onChange={handleIdChange}
                value={id}
                placeholder="아이디 입력"
            />
            <InputItem
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="비밀번호 입력"
            />
        </SigninLayout>
    )
}

export default Signin
