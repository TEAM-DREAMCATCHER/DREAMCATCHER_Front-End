import { Button, Heading, WelcomeLayout } from '@/pages/welcome/styles'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <WelcomeLayout>
            <Heading>환영합니다 👋🏻</Heading>
            <Link to="/home">
                <Button>시작하기</Button>
            </Link>
        </WelcomeLayout>
    )
}

export default Welcome
