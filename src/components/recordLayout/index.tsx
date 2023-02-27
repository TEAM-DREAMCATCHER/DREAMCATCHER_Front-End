import React, { ChangeEvent, useState } from 'react'
import { RecordState } from './types'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import {
    H2,
    EmojiDescription,
    EmojiButton,
    StyledLayout,
    EmojiContainer,
    DescriptionTextArea,
    SEmoji,
} from './style'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'
import Category from './category'
import AddButton from '../common/AddButton'

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
    const [recordState, setRecordState] = useState<RecordState>({
        emoji: '',
        content: '',
    })
    console.log(recordState)
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('')

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
        </StyledLayout>
    )
}

export default RecordLayout
