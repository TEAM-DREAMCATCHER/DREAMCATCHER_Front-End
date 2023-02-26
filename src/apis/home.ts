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
    // TODO : DUMMY_EMOJI 대신 API 호출
    return DUMMY_EMOJI
}
