import axios from 'axios'

const VALIDATE_DUPLICATE_URL = '/validateDuplicate'
const SIGN_UP_URL = '/signup'
const LOGIN_URL = '/login'

const authRequest = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_LAMBDA_URL,
})

export const idDuplicateCheckAPI = async (id: string): Promise<boolean> => {
    try {
        // TODO : debounce 걸기
        const response = await authRequest.get(VALIDATE_DUPLICATE_URL + '?username=' + id)
        console.log('response: ', response)
        return response.data.result
    } catch (error) {
        throw error
    }
}

export const signUpAPI = async (id: string, password: string): Promise<boolean> => {
    try {
        const response = await authRequest.post(
            SIGN_UP_URL + '?username=' + id + '&password=' + password
        )

        console.log('response: ', response)

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
        const response = await authRequest.post(
            LOGIN_URL + '?username=' + id + '&password=' + password
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
