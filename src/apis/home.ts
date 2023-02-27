import lambdaRequest from '@/apis/lambda'

const DUMMY_EMOJI: EmojiType[] = [
    {
        id: 1,
        emoji: '1f423',
    },
    {
        id: 2,
        emoji: '1f423',
    },
    {
        id: 3,
        emoji: '1f423',
    },
    {
        id: 4,
        emoji: '1f423',
    },
    {
        id: 5,
        emoji: '1f423',
    },
    {
        id: 6,
        emoji: '1f423',
    },
    {
        id: 8,
        emoji: '1f423',
    },
    {
        id: 9,
        emoji: '1f423',
    },
    {
        id: 10,
        emoji: '1f423',
    },
]

export interface EmojiType {
    id: number
    emoji: string
}

export const getPostEmojisAPI = async (year: number, month: number): Promise<EmojiType[]> => {
    const response = await lambdaRequest.get('/myDreams')
    // TODO : return type 정의
    const emojiData = response.data.map(({ id, emoji }: { id: number; emoji: string }) => ({
        id,
        emoji,
    }))
    console.log('emojiData: ', emojiData)
    return emojiData
    // return DUMMY_EMOJI
}

export const getTest = async () => {
    const response = await lambdaRequest.get('/myDreams')
    console.log('response: ', response.data)

    return response.data
}

export const getMyDreamsAPI = async () => {
    const response = await lambdaRequest.get('/myDreams')
    console.log('getMyDreamsAPI response: ', response)

    return response.data
}

export const getCurrentDreamsAPI = async () => {
    const response = await lambdaRequest.get('/getCurrentDreams')
    console.log('response: ', response)
}
