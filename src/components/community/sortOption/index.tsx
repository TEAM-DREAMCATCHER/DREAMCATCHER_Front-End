import { CategoryLayout, CategoryBox, CategoryButton } from './style'
import { useState } from 'react';

    
export default function index() {
    return (
        <>
            <CategoryLayout>
                <CategoryBox>
                    <CategoryButton>최근</CategoryButton>
                    <CategoryButton>인기</CategoryButton>
                </CategoryBox>
            </CategoryLayout>
        </>
    )
}
