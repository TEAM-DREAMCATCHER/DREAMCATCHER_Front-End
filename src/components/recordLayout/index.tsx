import React, { useState } from 'react'
import { RecordState } from './types'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import {
    EmojiHeader,
    EmojiDescription,
    DefaultImage,
    EmojiButton,
    StyledLayout,
    EmojiContainer,
    DescriptionHeader,
} from './style'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'

function RecordLayout() {
    const [recordState, setRecordState] = useState<RecordState>({ emoji: '' })
    const [showPicker, setShowPicker] = useState<boolean>(false)

    const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
        setRecordState((prev) => ({ ...prev, emoji: emojiData.unified }))
        setShowPicker((prev) => !prev)
    }

    return (
        <StyledLayout>
            <EmojiHeader>OO 님,</EmojiHeader>
            <EmojiHeader>안온한 밤 되셨나요?</EmojiHeader>
            <EmojiContainer>
                <EmojiButton onClick={() => setShowPicker((prev) => !prev)}>
                    {recordState.emoji ? (
                        <Emoji unified={recordState.emoji} size={50} />
                    ) : (
                        <DefaultImage src="img/plusCircle.png" alt="이모티콘 추가 버튼이미지" />
                    )}
                </EmojiButton>

                <EmojiDescription>떠오르는 잔상을 이모지로 표현해보세요</EmojiDescription>
                {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            </EmojiContainer>
            <>
                <DescriptionHeader>어떤 감정을 느끼셨나요?</DescriptionHeader>
            </>
        </StyledLayout>
    )
}

export default RecordLayout
