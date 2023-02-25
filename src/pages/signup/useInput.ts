import { ChangeEvent, useState } from 'react'

type UseInputReturns = [
    input: string,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    isValid: boolean
]

type ValidType = ((input: string) => Promise<boolean>) | ((input: string) => boolean)

function useInput(init?: string, valid?: ValidType): UseInputReturns {
    const [input, setInput] = useState(init ?? '')
    const [isValid, setIsValid] = useState(false)

    const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInput(value)

        if (valid) {
            const checkValid = await valid(value)
            setIsValid(checkValid)
        }
    }

    return [input, handleInputChange, isValid]
}

export default useInput
