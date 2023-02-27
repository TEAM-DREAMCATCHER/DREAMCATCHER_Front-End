import { Layout } from '@/components/common/styles/layout'
import styled from 'styled-components'

export const HomeLayout = styled(Layout)`
    padding: 0 20px 80px;
`

export const Header = styled.header`
    height: 70px;
    gap: 12px;

    ${({ theme }) => theme.layouts.flexEnd}
`
