import { useNavigate } from 'react-router-dom'
import { Header } from './style'

// TODO: 충돌로 인해 button  주석 처리함!
export default function RecordHeader() {
    const navigate = useNavigate()

    return (
        <Header>
            {/*<CloseButton onClick={() => navigate(-1)} />
            <SaveButton />*/}
        </Header>
    )
}
