import { idDuplicateCheckAPI } from '@/apis/auth'

export const validId = async (id: string): Promise<boolean> => {
    const isValidId = await idDuplicateCheckAPI(id)
    return isValidId
}

export const validPassword = (password: string): boolean => {
    // 최소 8자, 문자 >= 1, 숫자 >= 1:
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/

    if (!passwordRegex.test(password)) return false
    return true
}
