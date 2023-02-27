import { DetailButton, Layout } from './styles'
import Category from '@/components/common/category'
import SortOption from '@/components/common/sortOption'
import Posting from '@/components/common/posting'

export interface Info {
    id: string
    userId: string
    content: string
    createdAt: string
    updatedAt: string
    likeCount: number
    category: string
    pri: boolean
    emoji: string
}

export default function Community() {
    const mock = [
        {
            id: '4',
            userId: 'user',
            content: 'dream dream',
            createdAt: '2023-02-27',
            updatedAt: '2023-02-26',
            likeCount: 0,
            category: 'joy',
            pri: false,
            emoji: 'joy',
        },
        {
            id: '2',
            userId: '펄스',
            content: 'dream dream dream dream dream dream dream dream dream dream dream dream',
            createdAt: '2023-02-26',
            updatedAt: '2023-02-26',
            likeCount: 10,
            category: 'joy',
            pri: false,
            emoji: 'joy',
        },
        {
            id: '4',
            userId: '조이',
            content:
                'dream dream dream dream dream dream dream dream dream dream dream dream dream dream',
            createdAt: '2023-02-26',
            updatedAt: '2023-02-26',
            likeCount: 20,
            category: 'joy',
            pri: false,
            emoji: 'joy',
        },
    ]

    return (
        <>
            <Layout>
                <Category />
                <SortOption />
                {mock.map((info) => (
                    <DetailButton
                        to={`/Community/${info.id}`}
                        state={{
                            id: info.id,
                            userId: info.userId,
                            content: info.content,
                            createdAt: info.createdAt,
                            likeCount: info.likeCount,
                            pri: info.pri,
                        }}
                    >
                        <Posting props={info} />
                    </DetailButton>
                ))}
            </Layout>
        </>
    )
}
