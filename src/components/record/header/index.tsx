import { useNavigate } from 'react-router-dom'
import { Header, CloseButton, SaveButton } from './style'
import CloseIcon from '../../common/icons/CloseIcon'
import SaveIcon from '../../common/icons/SaveIcon'

export default function RecordHeader() {
    const navigate = useNavigate()

    return (
        <Header>
            <CloseButton onClick={() => navigate(-1)}>
                <CloseIcon />
            </CloseButton>
            <SaveButton>
                <SaveIcon />
            </SaveButton>
        </Header>
    )
}
