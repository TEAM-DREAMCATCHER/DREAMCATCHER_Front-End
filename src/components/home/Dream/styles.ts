import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 390px;
    height: 108px;
    padding: 22px;
    border-radius: 20px;
    background-color: #1d1a23;
`

export const Content = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const StatusBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LikeBox = styled.div`
    display: flex;
    align-items: center;
`

export const LikeCount = styled.span`
    margin-left: 20px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
`

export const PostDate = styled.span`
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
`
