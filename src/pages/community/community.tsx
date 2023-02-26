import { Layout } from './styles'
import Category from '@/components/common/category'
import SortOption from '@/components/common/sortOption'
import Posting from '@/components/common/posting'

export default function Community() {
    return (
        <Layout>
            <Category />
            <SortOption/>
            <Posting />
        </Layout>
    )
}
