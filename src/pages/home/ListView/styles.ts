import styled from 'styled-components'
import { Layout } from '@/components/common/styles/layout'

const GobackButton = styled.button`
    cursor: pointer;
`

const HomeLayout = styled(Layout)`
    display: flex;
    flex-direction: column;

    padding: 0 20px 80px;
`

const Header = styled.header`
    height: 70px;
    gap: 12px;

    ${({ theme }) => theme.layouts.flexBetween}
`

const Title = styled.h3`
    margin-bottom: 31px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.gray2};
`

const PostList = styled.ul`
    height: 100vh;
    overflow-y: scroll;
`

const AddButtonContainer = styled.div`
    position: fixed;
    bottom: 25px;
    align-self: center;
`

export { GobackButton, HomeLayout, Header, Title, PostList, AddButtonContainer }
