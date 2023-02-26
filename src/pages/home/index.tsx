import Calendar from '@/components/home/calendar'
import { Heading, HomeLayout, SubHeading } from '@/pages/home/styles'
import React from 'react'

function Home() {
    return (
        <HomeLayout>
            <Heading>오지님,</Heading>
            <SubHeading>2023년 2월 한달 간</SubHeading>
            <SubHeading>알록달록한 꿈을 꾸셨네요!</SubHeading>
            <Calendar />
        </HomeLayout>
    )
}

export default Home
