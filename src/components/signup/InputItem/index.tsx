import { InputItemBox, Input, IconBox, InputErrorMsg } from '@/components/signup/InputItem/styles'
import CheckIcon from '@/components/common/icons/CheckIcon'

interface InputItemProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    placeholder: string
    name: string
    type: 'text' | 'password'

    isError?: boolean
    errorMsg?: string
}

function InputItem({
    type,
    name,
    onChange,
    value,
    placeholder,
    isError,
    errorMsg,
}: InputItemProps) {
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
            {value !== '' && isError && <InputErrorMsg>{errorMsg}</InputErrorMsg>}
            {isValid && (
                <IconBox>
                    <CheckIcon />
                </IconBox>
            )}
        </InputItemBox>
    )
}
export default InputItem
