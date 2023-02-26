import request from '@/apis'

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

const MY_POSTS_URL = import.meta.env.VITE_PUBLIC_MY_POSTS_URL

export interface EmojiType {
    id: number
    emoji: string
}

export const getPostEmojisAPI = async (year: number, month: number): Promise<EmojiType[]> => {
    // TODO : DUMMY_EMOJI 대신 API 호출
    return DUMMY_EMOJI
}

export const getTest = async () => {
    // const response = await request.get(
    //     'https://hgsz3wlmc8.execute-api.ap-northeast-2.amazonaws.com/default/myDreams'
    // )
    // console.log('response: ', response)
}
