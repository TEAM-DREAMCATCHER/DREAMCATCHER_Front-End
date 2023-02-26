import {
    CarouselBox,
    CarouselItem,
    CarouselList,
    CarouselNav,
    CarouselNavItem,
    Desc,
    OnboardingLayout,
    Title,
    TitleBox,
} from '@/pages/onboarding/styles'
import { useEffect, useState } from 'react'

function Onboarding() {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const executeCallback = () => {
            setIdx((idx) => (idx + 1 >= 3 ? 0 : idx + 1))
        }

        const timerId = setInterval(executeCallback, 3000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <OnboardingLayout>
            <CarouselBox>
                <CarouselList idx={idx}>
                    <CarouselItem>
                        <TitleBox>
                            <Title>희미했던 꿈을</Title>
                            <Title>선명하게 기록해보아요.</Title>
                        </TitleBox>
                        <Desc>조금만 지나도 잊어버리는 나의 꿈,</Desc>
                        <Desc>기록해드림에 기록해보세요!</Desc>
                    </CarouselItem>
                    <CarouselItem>
                        <TitleBox>
                            <Title>나의 꿈을</Title>
                            <Title>맘껏 자랑해보세요.</Title>
                        </TitleBox>
                        <Desc>이런 꿈은 자랑해야해! 하는</Desc>
                        <Desc>모든 꿈들을 커뮤니티에 공유해보세요!</Desc>
                    </CarouselItem>
                    <CarouselItem>
                        <TitleBox>
                            <Title>희미했던 꿈을</Title>
                            <Title>선명하게 기록해보아요.</Title>
                        </TitleBox>
                        <Desc>조금만 지나도 잊어버리는 나의 꿈,</Desc>
                        <Desc>기록해드림에 기록해보세요!</Desc>
                    </CarouselItem>
                </CarouselList>
                <CarouselNav>
                    <CarouselNavItem isCurrent={idx === 0}></CarouselNavItem>
                    <CarouselNavItem isCurrent={idx === 1}></CarouselNavItem>
                    <CarouselNavItem isCurrent={idx === 2}></CarouselNavItem>
                </CarouselNav>
            </CarouselBox>
        </OnboardingLayout>
    )
}
export default Onboarding
