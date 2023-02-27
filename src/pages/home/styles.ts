import { Layout } from '@/components/common/styles/layout'
import styled from 'styled-components'

const HomeLayout = styled(Layout)`
    padding: 0 20px 80px;
    display: flex;
    flex-direction: column;
`

const Header = styled.header`
    height: 70px;
    gap: 12px;

    ${({ theme }) => theme.layouts.flexEnd}
`

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
`

const ListButton = styled.button`
    display: flex;
    align-items: center;
    color: #9e9e9e;
    cursor: pointer;
`

const DreamContainer = styled.div`
    margin-top: 45px;
`

const DreamContent = styled.li`
    margin-top: 16px;
`

const AddButtonBox = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 55px;
    align-self: center;
`

export {
    HomeLayout,
    Header,
    TitleBox,
    Title,
    ListButton,
    DreamContainer,
    DreamContent,
    AddButtonBox,
}
