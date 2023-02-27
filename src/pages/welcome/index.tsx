import { Link } from 'react-router-dom'
import { Button, Desc, Heading, WelcomeLayout } from '@/pages/welcome/styles'

function Welcome() {
    return (
        <WelcomeLayout>
            <main>
                <Heading>환영합니다 👋🏻</Heading>
                <Desc>
                    희미해지는 나의 꿈들을 <br />
                    기록해드림에 작성하여 간직해보세요!
                </Desc>
                <img src="/img/moon4.png" width="250" height="270" />
            </main>
            <Link to="/home">
                <Button>시작하기</Button>
            </Link>
        </WelcomeLayout>
    )
}

export default Welcome
