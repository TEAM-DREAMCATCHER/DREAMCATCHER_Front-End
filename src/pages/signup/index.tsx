import { Link, useNavigate } from 'react-router-dom'
import { SignupLayout, Flex, Header } from '@/pages/signup/styles'
import { Heading, Button } from '@/pages/welcome/styles'
import useInput from '@/pages/signup/useInput'
import InputItem from '@/components/signup/InputItem'
import BackIcon from '@/icons/back-icon'

const validId = async (id: string): Promise<boolean> => {
    // TODO : api 연결
    // const isDuplicate = await idDuplicateAPI(id)
    const isDuplicate = false
    return !isDuplicate
}

const validPassword = (password: string): boolean => {
    // 최소 8자, 문자 >= 1, 숫자 >= 1:
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/

    if (!passwordRegex.test(password)) return false
    return true
}

function SignUp() {
    const navigate = useNavigate()

    const [id, handleIdChange, isValidId] = useInput('', validId)
    const [password, handlePasswordChange, isValidPassword] = useInput('', validPassword)
    const [passwordConfirm, handlePasswordConfirmChange] = useInput()

    // NOTE: 에러 처리를 어떻게 하면 좋을까..?
    const isValidPasswordConfirm = password === passwordConfirm
    const isSubmitDisabled = !(isValidId && isValidPassword && isValidPasswordConfirm)

    const handleSubmit = () => {
        // TODO : 회원가입 로직
        console.log('submit')

        navigate('/welcome')
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
                />
                <InputItem
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={password}
                    placeholder="비밀번호 입력"
                    isError={!isValidPassword}
                />
                <InputItem
                    type="password"
                    name="passwordConfirm"
                    onChange={handlePasswordConfirmChange}
                    value={passwordConfirm}
                    placeholder="비밀번호 재입력"
                    isError={!isValidPasswordConfirm}
                />
            </Flex>

            <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
                회원가입
            </Button>
        </SignupLayout>
    )
}

export default SignUp
