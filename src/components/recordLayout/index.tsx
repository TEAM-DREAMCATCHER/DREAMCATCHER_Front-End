import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { RecordState } from './types'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import {
    H2,
    EmojiDescription,
    EmojiButton,
    EmojiContainer,
    DescriptionTextArea,
    SEmoji,
    RecordForm,
} from './style'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'
import Category from './category'
import AddButton from '../common/AddButton'
import RecordHeader from '../record/header'
import RecordFooter from '../record/footer'
import { uploadAPI } from '@/apis/upload'
import { useNavigate } from 'react-router-dom'

const options = [
    '웃겨요',
    '행복해요',
    '멋져요',
    '슬퍼요',
    '신기해요',
    '무서워요',
    '모르겠어요',
    '환상적이에요',
]

function RecordLayout() {
    const navigate = useNavigate()
    const [recordState, setRecordState] = useState<RecordState>({
        emoji: '',
        content: '',
        isPublic: false,
        date: new window.Date(),
    })

    const [showPicker, setShowPicker] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('')

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const response = await uploadAPI({
                emoji: recordState.emoji,
                content: recordState.content,
                likeCount: 0,
                category,
                pub: recordState.isPublic,
                createdAt: recordState.date,
            })
            if (response) navigate(-1)
        },
        [
            recordState.emoji,
            recordState.content,
            recordState.date,
            category,
            setCategory,
            setRecordState,
        ]
    )

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRecordState((prev) => ({ ...prev, content: event.target.value }))
    }

    const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
        setRecordState((prev) => ({ ...prev, emoji: emojiData.unified }))
        setShowPicker((prev) => !prev)
    }

    return (
        <>
            <RecordHeader />
            <RecordForm onSubmit={handleSubmit}>
                <section>
                    <H2>
                        OO 님,
                        <br />
                        안온한 밤 되셨나요?
                    </H2>
                    <EmojiContainer onClick={() => setShowPicker((prev) => !prev)}>
                        <EmojiButton>
                            {recordState.emoji ? (
                                <Emoji unified={recordState.emoji} size={50} />
                            ) : (
                                <AddButton shape="dot" size="md" />
                            )}
                        </EmojiButton>
                        <EmojiDescription>떠오르는 잔상을 이모지로 표현해보세요</EmojiDescription>
                        {showPicker && (
                            <SEmoji>
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </SEmoji>
                        )}
                    </EmojiContainer>
                </section>
                <section>
                    <H2>어떤 감정을 느끼셨나요?</H2>
                    <Category options={options} category={category} setCategory={setCategory} />
                    <DescriptionTextArea
                        placeholder="자세한 이야기를 듣고 싶어요! (최대 600자)"
                        onChange={handleChange}
                        maxLength={600}
                    ></DescriptionTextArea>
                </section>
            </RecordForm>
            <RecordFooter recordState={recordState} setRecordState={setRecordState} />
        </>
    )
}

export default RecordLayout
