import { Heading, LandingLayout, LogoBox } from '@/pages/Landing/styles'

function Landing() {
    return (
        <LandingLayout>
            <LogoBox>
                <img src="/img/logo.svg" />
            </LogoBox>
            <Heading>기록해드림(Dream)</Heading>
        </LandingLayout>
    )
}

export default Landing
