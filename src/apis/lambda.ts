import axios from 'axios'
import { checkAccessToken } from '@/apis/utlis'

const lambdaRequest = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_LAMBDA_URL,
})

lambdaRequest.interceptors.request.use(
    function (config) {
        return checkAccessToken(config)
    },
    async function (error) {
        return await Promise.reject(error)
    }
)

export default lambdaRequest
