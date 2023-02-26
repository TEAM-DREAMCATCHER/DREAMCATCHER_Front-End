import { CategoryLayout, CategoryList, CategoryItem } from './style'
import { useState } from 'react';

export default function Category() {
    const all = true;

    // 버튼 클릭이벤트
    const [btnActive, setBtnActive] = useState(0);

    const categoryList = [
        {
            id: 0,
            tag: '전체',
        },
        {
            id: 1,
            tag: '웃겨요',
        },
        {
            id: 2,
            tag: '행복해요',
        },
        {
            id: 3,
            tag: '멋져요',
        },
        {
            id: 4,
            tag: '슬퍼요',
        },
        {
            id: 5,
            tag: '신기해요',
        },
        {
            id: 6,
            tag: '무서워요',
        },
    ]

    return (
        <>
            <CategoryList>
                {
                    categoryList.map((item, index) => {
                        if (index === 0 && all || index > 0) {
                            return (
                                <CategoryItem
                                    key={item.id}
                                    idx={index}
                                    active={btnActive}
                                    onClick={() => {
                                        setBtnActive(index)
                                    }}
                                >
                                    {item.tag}
                                </CategoryItem>
                            )
                        } 
                    })
                }
            </CategoryList>
        </>
    )
}
