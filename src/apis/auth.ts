import axios from 'axios'

const authRequest = axios.create({
    baseURL: 'https://4rwbi1pbs0.execute-api.ap-northeast-2.amazonaws.com/api',
})

const ID_DUPLICATE_CHECK_BASE_URL = import.meta.env.VITE_PUBLIC_VALIDATE_DUPLICATE_URL
const SIGN_UP_BASE_URL = import.meta.env.VITE_PUBLIC_SIGNUP_URL
const LOGIN_BASE_URL = import.meta.env.VITE_PUBLIC_LOGIN_URL

export const idDuplicateCheckAPI = async (id: string): Promise<boolean> => {
    try {
        const response = await authRequest.get('/validateDuplicate' + '?username=' + id)
        console.log('response: ', response)
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

export const loginAPI = async (id: string, password: string): Promise<boolean> => {
    try {
        const response = await axios.post(
            LOGIN_BASE_URL + '?username=' + id + '&password=' + password
        )
        const token = response.data.token
        if (token) {
            localStorage.setItem('access-token', token)
            return true
        }
        throw new Error('로그인에 실패했습니다.')
    } catch (error) {
        throw error
    }
}
