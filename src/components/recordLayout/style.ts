import { Emoji } from 'emoji-picker-react'
import styled from 'styled-components'

export const StyledLayout = styled.div`
    max-width: 430px;

    section {
        margin-top: 50px;
    }

    section + section {
        margin-top: 60px;
    }
`

export const H2 = styled.h2`
    margin-bottom: 10px;
    vertical-align: top;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    line-height: 34px;
`

export const EmojiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 27px;
`

export const SEmoji = styled.div`
    position: fixed;
    z-index: 10;
    top: 310px;
`

export const DefaultImage = styled.img`
    width: 50px;
    filter: invert(78%) sepia(11%) saturate(889%) hue-rotate(226deg) brightness(87%) contrast(84%);
`

export const EmojiButton = styled.button`
    cursor: pointer;
`

export const EmojiDescription = styled.div`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 13px;
    color: #b9a1cf;
    margin-top: 18px;
`

export const DescriptionTextArea = styled.textarea`
    width: 100%;
    height: 225px;
    padding: 10px;
    margin-top: 24px;
    border-radius: 10px;
    resize: none;
    background-color: #1d1a23;
    color: white;
    font-size: 16px;
    font-family: 'Pretendard';

    &::placeholder {
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }
`
