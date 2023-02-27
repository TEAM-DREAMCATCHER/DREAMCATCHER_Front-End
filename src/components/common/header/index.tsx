import { HeaderBox } from '@/components/common/header/styles'
import AlertIcon from '@/components/common/icons/AlertIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import yetDeveloped from '@/utils/yetDeveloped'

function Header() {
    return (
        <HeaderBox>
            <span onClick={yetDeveloped}>
                <AlertIcon />
            </span>
            <span onClick={yetDeveloped}>
                <MenuIcon />
            </span>
        </HeaderBox>
    )
}

export default Header
