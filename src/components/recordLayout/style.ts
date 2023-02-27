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
    ${({ theme }) => theme.fonts.title20};
    line-height: 34px;
`

export const EmojiContainer = styled.div`
    ${({ theme }) => theme.layouts.flexCenterColumn};
    align-items: center;
    margin-top: 27px;
    cursor: pointer;
`

export const EmojiButton = styled.div`
    width: 50px;
    height: 50px;
    ${({ theme }) => theme.layouts.flexCenter};
`

export const SEmoji = styled.div`
    position: fixed;
    z-index: 10;
    top: 310px;
`

export const EmojiDescription = styled.div`
    margin-top: 18px;
    ${({ theme }) => theme.fonts.text13};
    background: ${({ theme }) => theme.colors.linear.purple};
    font-weight: bolder;
    color: transparent;
    -webkit-background-clip: text;
`

export const DescriptionTextArea = styled.textarea`
    width: 100%;
    height: 225px;
    padding: 10px;
    margin-top: 24px;
    border-radius: 10px;
    resize: none;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.text14};

    &::placeholder {
        ${({ theme }) => theme.fonts.text14};
        line-height: 20px;
    }
`
