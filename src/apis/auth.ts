import request from '.'

export const idDuplicateAPI = async (id: string): Promise<boolean> => {
    try {
        // TODO : API CORS 문제 해결후, 확인 필요
        const response = await request.get('?username=' + id)
        if (response.data.message === 'valid username') {
            return false
        }
        return true
    } catch (error) {
        throw error
    }
}
