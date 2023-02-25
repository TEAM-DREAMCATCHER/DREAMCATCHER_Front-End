import { IconBox, Input, InputItemBox } from './styles'
import CheckIcon from '../../../icons/check-icon'

interface InputItemProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    placeholder: string
    name: string
    type: 'text' | 'password'
    isError?: boolean
}

function InputItem({ type, name, onChange, value, placeholder, isError }: InputItemProps) {
    const isValid = value !== '' && !isError

    return (
        <InputItemBox>
            <Input
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            {isValid && (
                <IconBox>
                    <CheckIcon />
                </IconBox>
            )}
        </InputItemBox>
    )
}
export default InputItem
