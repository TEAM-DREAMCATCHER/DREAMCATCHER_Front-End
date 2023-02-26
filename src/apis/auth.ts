import request from '.'

export const idDuplicateCheckAPI = async (id: string): Promise<boolean> => {
    try {
        const response = await request.get('?username=' + id)
        return response.data.result
    } catch (error) {
        throw error
    }
}
