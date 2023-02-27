import { Link, useNavigate } from 'react-router-dom'
import { SignupLayout, Flex, Header, Button, Heading } from '@/pages/signup/styles'
import useInput from '@/pages/signup/useInput'
import InputItem from '@/components/signup/InputItem'
import { signUpAPI } from '@/apis/auth'
import BackIcon from '@/components/common/icons/BackIcon'
import { validId, validPassword } from '@/utils/valid'

function SignUp() {
    const navigate = useNavigate()

    const [id, handleIdChange, isValidId] = useInput('', validId)
    const [password, handlePasswordChange, isValidPassword] = useInput('', validPassword)
    const [passwordConfirm, handlePasswordConfirmChange] = useInput()

    const isValidPasswordConfirm = password === passwordConfirm
    const isSubmitDisabled = !(isValidId && isValidPassword && isValidPasswordConfirm)

    const handleSubmit = async () => {
        try {
            const res = await signUpAPI(id, password)
            if (res) {
                navigate('/welcome')
            }
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <SignupLayout>
            <Flex>
                <Header>
                    <Link to="/">
                        <BackIcon />
                    </Link>
                </Header>
                <Heading>정보를 입력해주세요</Heading>
                <InputItem
                    type="text"
                    name="id"
                    onChange={handleIdChange}
                    value={id}
                    placeholder="아이디 입력"
                    isError={!isValidId}
                    errorMsg="올바른 아이디를 입력해주세요."
                />
                <InputItem
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={password}
                    placeholder="비밀번호 입력"
                    isError={!isValidPassword}
                    errorMsg="문자, 숫자를 한개 이상 포함한 8자 이상의 비밀번호를 입력해주세요."
                />
                <InputItem
                    type="password"
                    name="passwordConfirm"
                    onChange={handlePasswordConfirmChange}
                    value={passwordConfirm}
                    placeholder="비밀번호 재입력"
                    isError={!isValidPasswordConfirm}
                    errorMsg="같은 비밀번호를 입력해주세요. "
                />
            </Flex>
            <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
                회원가입
            </Button>
        </SignupLayout>
    )
}

export default SignUp
