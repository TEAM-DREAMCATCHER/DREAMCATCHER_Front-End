import axios from 'axios'
import request from '@/apis'

const UPLOAD_URL = import.meta.env.VITE_PUBLIC_DREAM_URL

interface RecordData {
    content: string
    likeCount: 0
    category: string
    pub: boolean
    emoji: string
    createdAt: Date
}

export const uploadAPI = async (recordData: RecordData): Promise<Boolean> => {
    // try {
    //     const token = localStorage.getItem('access-token')
    //     const response = await axios.post(UPLOAD_URL, recordData, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem(`${token}`)}`,
    //             'Content-type': 'application/json',
    //         },
    //     })
    //     if (response.status === 200) {
    //         console.log('성공적으로  데이터가 보내졌습니다' + token)
    //         return response.data
    //     }
    //     throw new Error('데이터 전송이 실패했습니다')
    // } catch (error) {
    //     throw error
    // }
    try {
        const response = await request.post(UPLOAD_URL, recordData)
        console.log('uploading response: ', response)
        if (response.status === 200) {
            return true
        }
        throw new Error('기록 데이터 전송이 실패했습니다')
    } catch (error) {
        throw error
    }
}
