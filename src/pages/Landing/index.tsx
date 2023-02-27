import { Heading, LandingLayout, LogoBox } from '@/pages/Landing/styles'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()

    const onNextStep = () => {
        navigate('/onboarding')
    }
    useEffect(() => {
        const time = setTimeout(onNextStep, 1000)

        return () => clearTimeout(time)
    }, [])

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
