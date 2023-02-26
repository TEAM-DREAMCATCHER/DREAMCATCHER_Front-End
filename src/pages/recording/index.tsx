import React from 'react'
import RecordLayout from '../../components/recordLayout/index'
import RecordHeader from '../../components/record/header'
import RecordFooter from '../../components/record/footer'
import { StyledRecord } from './style'

function Recording() {
    return (
        <StyledRecord>
            <RecordHeader />
            <RecordLayout />
            <RecordFooter />
        </StyledRecord>
    )
}

export default Recording
