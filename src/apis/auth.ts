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
