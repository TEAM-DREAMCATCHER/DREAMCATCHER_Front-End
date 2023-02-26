import { SortOptionLayout, SortOptionList, SortOptionSpan, SortOptionItem } from './style'
import { useState } from 'react'

export default function SortOption() {

    const [btnActive, setBtnActive] = useState(0);

    const sortOptionList = [
        {
            id: 0,
            option: "최근"
        },
        {
            id: 1,
            option: "인기"
        },
    ];

    return (
        <>
            <SortOptionLayout>
                <SortOptionList>
                    {
                        sortOptionList.map((item, index) => {
                            return (
                                <>
                                    <SortOptionItem
                                        key={item.id}
                                        idx={index}
                                        active={btnActive}
                                        onClick={() => {
                                            setBtnActive(index)
                                        }}
                                    >
                                        {item.option}
                                    </SortOptionItem>
                                    <SortOptionSpan></SortOptionSpan>
                                </>
                            )
                        })
                    }
                </SortOptionList>
            </SortOptionLayout>
        </>
    )
}
