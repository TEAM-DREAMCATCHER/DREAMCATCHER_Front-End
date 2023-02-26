import { useNavigate } from 'react-router-dom'
import { Header, CloseButton, SaveButton } from './style'

export default function RecordHeader() {
    const navigate = useNavigate()

    return (
        <Header>
            <CloseButton onClick={() => navigate(-1)} />
            <SaveButton />
        </Header>
    )
}
