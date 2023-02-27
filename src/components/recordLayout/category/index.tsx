import { CategoryLayout, CategoryList, CategoryItem } from './style'
import { Dispatch, SetStateAction, useState } from 'react'

interface CategoryProps {
    options: string[]
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

export default function Category({ options, category, setCategory }: CategoryProps) {
    return (
        <>
            <CategoryLayout>
                <CategoryList>
                    {options.map((option) => (
                        <CategoryItem
                            onClick={(e) => {
                                e.stopPropagation()
                                setCategory(option)
                            }}
                            key={option}
                            isChosen={category === option}
                        >
                            {option}
                        </CategoryItem>
                    ))}
                </CategoryList>
            </CategoryLayout>
        </>
    )
}
