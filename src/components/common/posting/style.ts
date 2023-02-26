import styled from 'styled-components'

export const PostingItem = styled.li`
    width: 390px;
    height: 154px;
    margin: 16px auto;
    padding: 20px;
    background: #1d1a23;
    border-radius: 20px;
    list-style: none;
`
export const ProfileImg = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    background: gray;
    text-align: center;
    padding: 7px 0;
`
export const IdParagraph = styled.p`
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #eeeff3;
`
export const ProfileEmoji = styled.div`
    width: 30px;
    height: 30px;
    margin-left: auto;
`
export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
`

export const ContentParagraph = styled.p`
    margin: 12px 0 10px;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    min-height: 50px;
    color: #eeeff3;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const FooterBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LikeIconBox = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    padding: 7px;
    border-radius: 50%;
    background: #262626;
`
export const LikeCount = styled.p`
    margin-left: 8px;
    font-size: 11px;
    font-weight: 600;
    color: #eeeff3;
`
export const TimeParagraph = styled.p`
    margin-left: auto;
    font-size: 11px;
    font-weight: 600;
    color: #9e9e9e;
`
