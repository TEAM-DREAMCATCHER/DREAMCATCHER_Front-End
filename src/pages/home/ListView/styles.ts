import styled from 'styled-components'
import { Layout } from '@/components/common/styles/layout'

const GobackButton = styled.button`
    cursor: pointer;
`

const HomeLayout = styled(Layout)`
    display: flex;
    flex-direction: column;

    padding: 0 20px 60px;
`

const Header = styled.header`
    ${({ theme }) => theme.layouts.flexBetween}

    height: 70px;
    gap: 12px;
`

const Title = styled.h3`
    color: ${(props) => props.theme.colors.gray2};

    margin-bottom: 31px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`

const PostList = styled.ul`
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
`

const AddButtonContainer = styled.div`
    position: fixed;
    bottom: 25px;
    align-self: center;
`

export { GobackButton, HomeLayout, Header, Title, PostList, AddButtonContainer }
