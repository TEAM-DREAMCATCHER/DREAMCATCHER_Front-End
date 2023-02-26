import { loginAPI } from '@/apis/auth'
import BackIcon from '@/components/common/icons/BackIcon'
import InputItem from '@/components/signup/InputItem'
import { Button, SigninLayout, Header, Heading, Main, SignupButton } from '@/pages/signin/styles'
import useInput from '@/pages/signup/useInput'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    const navigate = useNavigate()

    const [id, handleIdChange] = useInput()
    const [password, handlePasswordChange] = useInput()

    const onAction = async () => {
        try {
            await loginAPI(id, password)
            navigate('/welcome')
        } catch (error) {
            alert('로그인에 실패했습니다.')
        }
    }
    return (
        <SigninLayout>
            <Header>
                <Link to="/">
                    <BackIcon />
                </Link>
            </Header>
            <Heading>로그인을 해주세요</Heading>

            <Main>
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
                <Button onClick={onAction}>로그인</Button>
                <SignupButton to="/signup">아이디가 없으신가요? 회원가입 하기</SignupButton>
            </Main>
        </SigninLayout>
    )
}

export default Signin
