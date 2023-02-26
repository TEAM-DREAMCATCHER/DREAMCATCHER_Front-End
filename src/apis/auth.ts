import axios from 'axios'

const ID_DUPLICATE_CHECK_BASE_URL = import.meta.env.VITE_PUBLIC_VALIDATE_DUPLICATE_URL
const SIGN_UP_BASE_URL = import.meta.env.VITE_PUBLIC_SIGNUP_URL

export const idDuplicateCheckAPI = async (id: string): Promise<boolean> => {
    try {
        const response = await axios.get(ID_DUPLICATE_CHECK_BASE_URL + '?username=' + id)

        return response.data.result
    } catch (error) {
        throw error
    }
}

export const signUpAPI = async (id: string, password: string): Promise<boolean> => {
    try {
        const response = await axios.post(
            SIGN_UP_BASE_URL + '?username=' + id + '&password=' + password
        )
        const token = response.data.token
        if (token) {
            localStorage.setItem('access-token', token)
            return true
        }
        throw new Error('회원가입에 실패했습니다.')
    } catch (error) {
        throw error
    }
}
