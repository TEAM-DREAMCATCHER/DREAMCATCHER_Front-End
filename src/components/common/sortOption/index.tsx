import { SortOptionLayout, SortOptionList, SortOptionSpan, SortOptionItem } from './style'
import { useState } from 'react'

export default function SortOption() {
    return (
        <>
            <SortOptionLayout>
                <SortOptionList>
                    <SortOptionItem className="active">
                        <span></span>
                        최근
                    </SortOptionItem>
                    <SortOptionSpan></SortOptionSpan>
                    <SortOptionItem>
                        <span></span>
                        인기
                    </SortOptionItem>
                </SortOptionList>
            </SortOptionLayout>
        </>
    )
}
