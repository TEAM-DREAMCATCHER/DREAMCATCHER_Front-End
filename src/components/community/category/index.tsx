import { CategoryLayout, CategoryList, CategoryItem } from './style'

export default function Category() {
    return (
        <>
            <CategoryLayout>
                <CategoryList>
                    <CategoryItem>전체</CategoryItem>
                    <CategoryItem>웃겨요</CategoryItem>
                    <CategoryItem>행복해요</CategoryItem>
                    <CategoryItem>멋져요</CategoryItem>
                    <CategoryItem>슬퍼요</CategoryItem>
                    <CategoryItem>신기해요</CategoryItem>
                    <CategoryItem>무서워요</CategoryItem>
                </CategoryList>
            </CategoryLayout>
        </>
    )
}
