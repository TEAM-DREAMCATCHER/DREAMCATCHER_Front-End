import { SortOptionLayout, SortOptionList, SortOptionItem } from './style'
import { useState } from 'react'

export default function SortOption() {
    const [optionActive, setOptionActive] = useState(0);

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
                                <SortOptionItem
                                    key={item.id}
                                    idx={index}
                                    active={optionActive}
                                    onClick={() => {
                                        setOptionActive(index)
                                    }}
                                >
                                    {item.option}
                                </SortOptionItem>
                            )
                        })
                    }
                </SortOptionList>
            </SortOptionLayout>
        </>
    )
}
