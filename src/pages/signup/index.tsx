import BackIcon from '../../icons/back-icon'
import { Wrapper, Button, Header, Heading, Flex } from './styles'
import InputItem from '../../components/signup/InputItem'
import useInput from './useInput'

const validId = async (id: string): Promise<boolean> => {
    // TODO : 아이디 중복 체크
    if (id.length < 8) return false
    return true
}

const validPassword = (password: string): boolean => {
    // TODO : 비밀번호 정규식 체크
    if (password.length < 8) return false
    return true
}

function SignUp() {
    const [id, handleIdChange, isValidId] = useInput('', validId)
    const [password, handlePasswordChange, isValidPassword] = useInput('', validPassword)
    const [passwordConfirm, handlePasswordConfirmChange] = useInput()

    // NOTE: 에러 처리를 어떻게 하면 좋을까..?
    const isValidPasswordConfirm = password === passwordConfirm
    const isSubmitDisabled = !(isValidId || isValidPassword || isValidPasswordConfirm)

    const handleSubmit = () => {
        // TODO : 회원가입 로직
        console.log('submit')
    }

    return (
        <Wrapper>
            <Flex>
                <Header>
                    <BackIcon />
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
        </Wrapper>
    )
}

export default SignUp
