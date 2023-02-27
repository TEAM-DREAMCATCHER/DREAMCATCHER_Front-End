import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = styled.div`
    width: 100%;
    max-width: 430px;
    margin: auto;
    min-height: 100vh;
    background: #12121b;
    color: #ffffff;
`

export const PostingSection = styled.section`
    width: 430px;
    height: 932px;
    padding: 20px;
    color: white;
`

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

export const BackButton = styled(Link)`
    color: white;
    cursor: pointer;
    &:hover {
        opacity: 70%;
    }
`

export const ShareButton = styled.button`
    cursor: pointer;
`

export const EmojiBox = styled.div`
    height: 150px;
    font-size: 64px;
    text-align: center;
    padding: 40px 0;
`

export const PostingBox = styled.div``

export const UserBox = styled.div`
    line-height: 20px;
    justify-content: space-between;
    display: flex;
    margin: 20px;
`

export const UserInfoBox = styled.div`
    align-items: center;
    display: flex;
`

export const ManageBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ManageButton = styled.button`
    cursor: pointer;
    color: white;
    margin: 0 4px;
`

export const ImgBox = styled.div``

export const IdBox = styled.div`
    margin-left: 12px;
    font-size: 14px;
`

export const ContentBox = styled.div`
    margin: 20px;
    min-height: 175px;
`

export const ContentParagraph = styled.p`
    line-height: 22px;
    font-size: 16px;
`

export const FooterBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

export const LikeBox = styled.div`
    font-size: 14px;
`

export const LikeButton = styled.button`
    cursor: pointer;
`

export const TimeBox = styled.div`
    font-size: 16px;
    color: #9e9e9e;
`
