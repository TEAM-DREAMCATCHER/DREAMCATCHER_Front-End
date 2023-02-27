import styled from 'styled-components'

export const HeaderBox = styled.header`
    height: 70px;
    gap: 12px;
    padding: 20px;
    ${({ theme }) => theme.layouts.flexEnd};
`
