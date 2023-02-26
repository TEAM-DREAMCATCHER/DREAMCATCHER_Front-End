import styled from 'styled-components'

export const StyledLayout = styled.div`
    padding: 15px 20px;
    width: 100%;
`

export const EmojiHeader = styled.header`
    width: 390px;
    height: 25px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    font-family: 'Pretendard';
`

export const EmojiContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    padding: 10px 0;
    position: absolute;
    z-index: 100;
`

export const DefaultImage = styled.img`
    width: 50px;
    filter: invert(78%) sepia(11%) saturate(889%) hue-rotate(226deg) brightness(87%) contrast(84%);
`

export const EmojiButton = styled.button`
    cursor: pointer;
`

export const EmojiDescription = styled.div`
    height: 16px;
    font-family: 'Pretendard';
    font-size: 14px;
    display: flex;
    text-align: center;
    align-items: center;
    color: #b9a1cf;
    margin-top: 10px;
`

export const DescriptionHeader = styled.header`
    position: fixed;
    top: 210px;
    width: 390px;
    height: 25px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    font-family: 'Pretendard';
`
