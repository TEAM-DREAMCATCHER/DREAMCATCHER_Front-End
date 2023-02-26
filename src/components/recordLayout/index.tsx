import React, { ChangeEvent, useState } from 'react'
import { RecordState } from './types'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import {
    H2,
    EmojiDescription,
    DefaultImage,
    EmojiButton,
    StyledLayout,
    EmojiContainer,
    DescriptionTextArea,
} from './style'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'
import { Select } from './Select'
import { SelectOption } from './Select/types'

const options = [
    { label: '모르겠어요', value: '모르겠어요' },
    { label: '웃겨요', value: '웃겨요' },
    { label: '행복해요', value: '행복해요' },
    { label: '멋져요', value: '멋져요' },
    { label: '슬퍼요', value: '슬퍼요' },
]

function RecordLayout() {
    const [recordState, setRecordState] = useState<RecordState>({
        emoji: '',
        content: '',
    })
    const [category, setCategory] = useState<SelectOption | undefined>(options[0])
    const [showPicker, setShowPicker] = useState<boolean>(false)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRecordState((prev) => ({ ...prev, content: event.target.value }))
    }

    const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
        setRecordState((prev) => ({ ...prev, emoji: emojiData.unified }))
        setShowPicker((prev) => !prev)
    }

    return (
        <StyledLayout>
            <section>
                <H2>
                    OO 님,
                    <br />
                    안온한 밤 되셨나요?
                </H2>
                <EmojiContainer>
                    <EmojiButton onClick={() => setShowPicker((prev) => !prev)}>
                        {recordState.emoji ? (
                            <Emoji unified={recordState.emoji} size={50} />
                        ) : (
                            <DefaultImage src="img/plusCircle.png" alt="이모티콘 추가 버튼이미지" />
                        )}
                    </EmojiButton>
                    <EmojiDescription>떠오르는 잔상을 이모지로 표현해보세요</EmojiDescription>
                    {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
                </EmojiContainer>
            </section>
            <section>
                <H2>어떤 감정을 느끼셨나요?</H2>
                <Select options={options} value={category} onChange={(o) => setCategory(o)} />
                <DescriptionTextArea
                    placeholder="자세한 이야기를 듣고 싶어요! (최대 600자)"
                    onChange={handleChange}
                    maxLength={600}
                ></DescriptionTextArea>
            </section>
        </StyledLayout>
    )
}

export default RecordLayout
